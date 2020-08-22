import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AvailabilityCard from '../AvailabilityCard';

import { darkColorScheme } from '../../colors';

const { surfaceColor } = darkColorScheme;

const styles = StyleSheet.create({
  cardsGroupContainer: {
    flex: 1,
    backgroundColor: surfaceColor,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 0,
    paddingLeft: 0,
  },
});

const DATA = [
  { id: '1', time: '08:35' },
  { id: '2', time: '09:20' },
  { id: '3', time: '10:35' },
  { id: '4', time: '14:40' },
  { id: '5', time: '15:30' },
];

export default function AvailabilityList() {
  return (
    <View style={styles.cardsGroupContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <AvailabilityCard data={item} key={item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
