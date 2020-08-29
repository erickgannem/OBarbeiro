import React from 'react';

import {
  View, Text, StyleSheet, Button
} from 'react-native';

import { darkColorScheme } from '../../colors';

const {
  surfaceColor,
  onSurfaceColor,
  secondaryColor,
  onSecondaryColor,
} = darkColorScheme;

const cardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: surfaceColor,
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingRight: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  hours: {
    fontSize: 24,
    fontWeight: 'bold',
    color: onSurfaceColor,
  },
  button: {
    color: onSecondaryColor,
    backgroundColor: secondaryColor,
  },
});

function AvailabilityCard({ data }) {
  const professional = data;
  const { availability, name } = professional;

  return availability.map((hour) => (
    <View key={hour} style={cardStyle.container}>
      <Text style={cardStyle.hours}>{hour}</Text>
      <Button
        title="Agendar"
        color={cardStyle.button.backgroundColor}
        // placeholder for future functionality
        onPress={() => console.log('Agendar com: ', name)}
      />
    </View>
  ));
}

export default AvailabilityCard;
