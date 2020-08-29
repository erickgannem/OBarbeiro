import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import ServiceItem from '../../components/ServiceItem';

import { darkColorScheme } from '../../colors';

import ServicesContext from '../../context/ServicesContext';


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

export default function ServicesView() {
  const { services } = useContext(ServicesContext);

  return (
    <View style={styles.container}>
      {services.map(({
        _id, icon, name, cost
      }) => <ServiceItem key={_id} icon={icon} name={name} cost={cost} />)}
    </View>
  );
}
