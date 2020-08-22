import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

import { darkColorScheme } from '../../colors';

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
  }
});

export default function ProfessionalItem(data) {
  // placeholder values
  const name = 'John';
  const surname = 'Doe';
  const photoURL = 'https://cnaca.ca/wp-content/uploads/2018/10/user-icon-image-placeholder.jpg';


  return (
    <View style={styles.itemContainer}>
      <Image style={styles.profilePhoto} source={{ uri: photoURL }} />
      <View style={styles.informationWrapper}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: onSurfaceColor }}>
          {`${name} ${surname}`}
        </Text>
        <Text style={{ fontSize: 16, fontStyle: 'italic', color: onSurfaceColor }}>Hidratação Capilar, Sobrancelhas, Maquiagem</Text>
        <TouchableOpacity style={styles.bookButton} onPress={() => {}}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: onSecondaryColor }}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
