import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { darkColorScheme } from '../../colors';

const {
  surfaceColor,
  primaryDarkVariant,
  onSurfaceColor,
  onPrimaryColor,
  backgroundColor,
  secondaryColorDarkVariant
} = darkColorScheme;

const styles = StyleSheet.create({
  itemContainer: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 1,
    borderColor: surfaceColor,
    backgroundColor: surfaceColor,
    borderRadius: 5,
    elevation: 10,
  },
  informationWrapper: {
    width: '100%',
    backgroundColor: primaryDarkVariant,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    minHeight: 80,
  },
  iconWrapper: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
  },
  textStyling: {
    textAlign: 'center',
    color: onPrimaryColor,
  },
  nameText: {
    fontSize: 16,
  },
  costText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: backgroundColor,
  },
  containerIsSelected: {
    borderWidth: 1,
    borderColor: primaryDarkVariant,
  }
});

export default function ServiceItem({ icon, name, cost }) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={selected ? [styles.itemContainer, styles.containerIsSelected] : styles.itemContainer}
      onPress={() => setSelected(!selected)}
    >
      {selected && (
      <View
        style={{
          position: 'absolute',
          top: -16,
          right: -10,
          backgroundColor: secondaryColorDarkVariant,
          width: 30,
          height: 30,
          borderRadius: 100
        }}
      />
      )}

      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={64} color={onSurfaceColor} />
      </View>
      <View style={styles.informationWrapper}>
        <Text style={[styles.textStyling, styles.nameText]}>{name}</Text>
        <Text style={[styles.textStyling, styles.costText]}>
          R$
          {' '}
          {cost}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
