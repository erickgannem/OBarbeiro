import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AvailabilityCard from '../AvailabilityCard';

import ProfessionalsContext from '../../context/ProfessionalsContext';

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

export default function AvailabilityList() {
  const { professionals } = useContext(ProfessionalsContext);

  return (
    <View style={styles.cardsGroupContainer}>
      <FlatList
        data={professionals}
        renderItem={({ item }) => (
          <AvailabilityCard data={item} key={item._id} />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
