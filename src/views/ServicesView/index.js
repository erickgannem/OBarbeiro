import React from 'react';
import { View, StyleSheet } from 'react-native';

import ServiceItem from '../../components/ServiceItem';

import { darkColorScheme } from '../../colors';

const { backgroundColor } = darkColorScheme;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor,
  },
  badge: {}
});

const mockedItems = [
  {
    id: 1, icon: 'md-happy', description: 'Corte de cabelo', cost: '100'
  },
  {
    id: 2, icon: 'md-heart', description: 'Corte de barba', cost: '80'
  },
  {
    id: 3, icon: 'md-warning', description: 'Hidratação de cabelo', cost: '300'
  },
  {
    id: 4, icon: 'md-snow', description: 'Hidratação de barba', cost: '200'
  },
];

export default function ServicesView() {
  return (
    <View style={styles.container}>
      {mockedItems.map(({
        id, icon, description, cost
      }) => <ServiceItem key={id} icon={icon} description={description} cost={cost} />)}
    </View>
  );
}
