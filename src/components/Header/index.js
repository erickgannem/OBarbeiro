import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { darkColorScheme } from '../../colors';

import DateContext from '../../context/DateContext';

import getToday from '../../helpers/get-today';

const { primaryColor, onPrimaryColor } = darkColorScheme;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: primaryColor,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Courgette',
    color: onPrimaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O'Barbeiro</Text>
    </View>
  );
}

export default Header;
