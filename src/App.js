import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { StatusBar, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { darkColorScheme } from './colors';

import Header from './components/Header';
import MainView from './views/MainView';
import ServicesView from './views/ServicesView';
import ProfessionalsView from './views/ProfessionalsView';

import DateContext from './context/DateContext';
import ProfessionalsContext from './context/ProfessionalsContext';
import ServicesContext from './context/ServicesContext';

import api from './helpers/api';

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
  const [services, setServices] = useState([]);
  const [, setError] = useState({});
  const [, setStoragePermission] = useState('');


  function init() {
    async function loadProfessionals() {
      try {
        const persisted = await AsyncStorage.getItem('PROFESSIONALS');

        if (persisted) {
          const value = JSON.parse(persisted);
          setProfessionals(value);
          return;
        }
        const response = await api.get('/professionals');
        const { data } = response;

        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('PROFESSIONALS', jsonValue);
        setProfessionals(data);
      } catch (err) {
        setError(err);
      }
    }
    async function loadServices() {
      try {
        const persisted = await AsyncStorage.getItem('SERVICES');

        if (persisted) {
          const value = JSON.parse(persisted);
          setServices(value);
          return;
        }
        const response = await api.get('/services');
        const { data } = response;

        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('SERVICES', jsonValue);
        setServices(data);
      } catch (err) {
        setError(err);
      }
    }
    return { loadServices, loadProfessionals };
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
      setError(err);
    }
  }
  async function writeProfileImages(data) {
    const { dirs } = RNFetchBlob.fs;

    const promisesArr = data.map(async (item) => {
      try {
        const request = await RNFetchBlob
          .config({
            path: `${dirs.PictureDir}/OBarbeiro/cache/profiles/${item.name}_${item.surname}.png`
          })
          .fetch('GET', item.photoURL);
        return request;
      } catch (err) {
        return setError(err);
      }
    });
    await Promise.all(promisesArr);
  }

  useEffect(() => {
    requestStoragePermission();
    init().loadProfessionals();
    init().loadServices();

    writeProfileImages(professionals);
  }, []);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      <ProfessionalsContext.Provider value={{ professionals, setProfessionals }}>
        <ServicesContext.Provider value={{ services, setServices }}>
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
        </ServicesContext.Provider>
      </ProfessionalsContext.Provider>
    </DateContext.Provider>
  );
}
