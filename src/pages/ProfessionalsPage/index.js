import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: '#1b0000',
  },
});

export default function ProfessionalsPage(props) {
  return (
    <View style={styles.container}>
      <Text>Voce está na "Professionals Page!!"</Text>
    </View>
  );
}
