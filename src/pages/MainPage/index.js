import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import AppCalendar from '../../components/AppCalendar';

import AvailabilityList from '../../components/AvailabilityList';

import {darkColorScheme} from '../../colors';

const {backgroundColor, onBackgroundColor} = darkColorScheme;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor,
  },
  text: {
    fontSize: 20,
    color: onBackgroundColor,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 5,
    fontWeight: 'bold',
  }
});

export default function MainPage() {
  return (
    <View style={styles.container}>
        <AppCalendar />
        <AvailabilityList />
    </View>
  );
}

