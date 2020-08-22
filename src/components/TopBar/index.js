import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {darkColorScheme} from '../../colors';

const {primaryColor, onPrimaryColor} = darkColorScheme;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: primaryColor,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Courgette',
    color: onPrimaryColor,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O'Barbeiro</Text>
    </View>
  );
}

export default TopBar;
