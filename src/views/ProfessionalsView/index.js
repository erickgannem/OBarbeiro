import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { darkColorScheme } from '../../colors';

import ProfessionalItem from '../../components/ProfessionalItem';

import ProfessionalsContext from '../../context/ProfessionalsContext';

const { backgroundColor } = darkColorScheme;

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
});

export default function ProfessionalsView() {
  const { professionals } = useContext(ProfessionalsContext);

  return (
    <View style={styles.container}>
      {professionals.map(item =>
        <ProfessionalItem key={item._id} professional={item} />
      )}
    </View>
  );
}
