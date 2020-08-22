import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { StatusBar, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from "rn-fetch-blob";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { darkColorScheme } from './src/colors';

import Header from './src/components/Header';
import MainView from './src/views/MainView';
import ServicesView from './src/views/ServicesView';
import ProfessionalsView from './src/views/ProfessionalsView';

import DateContext from './src/context/DateContext';
import ProfessionalsContext from './src/context/ProfessionalsContext';

import api from './src/helpers/api';

const {
  primaryDarkVariant,
  onPrimaryColor,
  primaryColor,
  backgroundColor
} = darkColorScheme;

const Tab = createBottomTabNavigator();

export default function App() {
  const [date, setDate] = useState({});
  const [professionals, setProfessionals] = useState([]);
  const [error, setError] = useState({});
  const [storagePermission, setStoragePermission] = useState('');

  async function fetchProfessionals() {
    try {
      const fetchedProfessionals = await api.get('/professionals');
      const { data } = fetchedProfessionals;
      setProfessionals(data);
    } catch (err) {
      setError({ error: err });
    }
  }
  async function storeProfessionals(professionalsToStore) {
    try {
      await AsyncStorage.setItem('professionals', JSON.stringify(professionalsToStore));
    } catch (err) {
      setError({ error: err });
    }
  }
  async function requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
          title: "O'Barbeiro deseja obter algumas permissões",
          message: 'Este aplicativo requer permissões para usar o armazenamento do dispositivo',
          buttonNeutral: 'Perguntar depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Permitir'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setStoragePermission(PermissionsAndroid.RESULTS.GRANTED);
      } else {
        setStoragePermission(PermissionsAndroid.RESULTS.DENIED);
      }
    } catch (err) {
      setError({ error: err });
    }
  }
  async function writeProfileImages(data) {
    let dirs = RNFetchBlob.fs.dirs;
    
    const promisesArr = data.map(async item => {
      try {
       const request = await RNFetchBlob
        .config({
          path: `${dirs.PictureDir}/OBarbeiro/cache/profiles/${item.name}_${item.surname}.png`
        })
        .fetch('GET', item.photoURL);
        return request;
      } catch(err) {
        setError(err)
      }
    })
    await Promise.all(promisesArr);
  }

  useEffect(() => {
    requestStoragePermission();
    fetchProfessionals();
    storeProfessionals(professionals);
    writeProfileImages(professionals);
  }, []);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      <ProfessionalsContext.Provider value={{ professionals, setProfessionals }}>
        <NavigationContainer>
          <StatusBar backgroundColor={primaryDarkVariant} barStyle="dark-content" />
          <Header />
          <Tab.Navigator
            tabBarOptions={{
              style: {
                backgroundColor: primaryColor,
                borderTopColor: 'transparent',
              },
              activeTintColor: onPrimaryColor,
              inactiveTintColor: backgroundColor,
            }}
          >
            <Tab.Screen
              name="Inicio"
              component={MainView}
              options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Serviços"
              component={ServicesView}
              options={{
                tabBarLabel: 'Serviços',
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="scissors" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Profissionais"
              component={ProfessionalsView}
              options={{
                tabBarLabel: 'Profissionais',
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="md-star" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ProfessionalsContext.Provider>
    </DateContext.Provider>
  );
}
