import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

import { darkColorScheme } from '../../colors';

import ProfilePlaceholder from '../../assets/images/profile-placeholder.png';

const {
  surfaceColor, secondaryColor, onSecondaryColor, onSurfaceColor
} = darkColorScheme;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: surfaceColor,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  profilePhoto: {
    width: 80,
    minHeight: 80,
    height: 'auto',
    borderRadius: 5,
  },
  informationWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  bookButton: {
    backgroundColor: secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    borderRadius: 5,
  },
  professionalName: {
    fontSize: 26, fontWeight: 'bold', color: onSurfaceColor, marginBottom: 5
  },
  servicesName: {
    fontSize: 16, fontStyle: 'italic', color: onSurfaceColor, marginBottom: 5
  },
  availabilityText: {
    fontSize: 16, fontStyle: 'italic', color: onSurfaceColor, fontWeight: 'bold'
  }
});

export default function ProfessionalItem(data) {
  const { professional } = data;
  const {
    name, surname, availability, services
  } = professional;

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.profilePhoto} source={ProfilePlaceholder} />
      <View style={styles.informationWrapper}>
        <Text style={styles.professionalName}>
          {`${name} ${surname}`}
        </Text>
        <Text style={styles.servicesName}>
          {services.map((service) => service.name).join(', ')}
        </Text>
        <Text style={styles.availabilityText}>
          Disponível às:
          {' '}
          {availability.join(', ')}
        </Text>
        <TouchableOpacity style={styles.bookButton} onPress={() => {}}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: onSecondaryColor }}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
