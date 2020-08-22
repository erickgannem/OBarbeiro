import React, { useContext } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

import AppCalendar from '../../components/AppCalendar';
import AvailabilityList from '../../components/AvailabilityList';

import { darkColorScheme } from '../../colors';

import DateContext from '../../context/DateContext';

const { backgroundColor, onBackgroundColor } = darkColorScheme;

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
  text: {
    fontSize: 20,
    color: onBackgroundColor,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 5,
    fontWeight: 'bold',
  }
});
const textStyle = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
});

const Information = ({ date, isSelected }) => {
  const { dateString } = date;

  if (isSelected) {
    const [, month, day] = dateString.split('-');
    return (
      <View style={textStyle.container}>
        <Text style={textStyle.text}>
          Disponibilidade para o dia:
          {' '}
          {`${day}/${month}`}
        </Text>
      </View>
    );
  }
  return (
    <View style={textStyle.container}>
      <Text style={textStyle.text}>
        Por favor, selecione uma data no calendário.
      </Text>
    </View>
  );
};

export default function MainView() {
  const { date } = useContext(DateContext);
  const isSelected = !!Object.keys(date).length;

  return (
    <View style={styles.container}>
      <AppCalendar />
      <Information date={date} isSelected={isSelected} />
      {isSelected && <AvailabilityList />}
    </View>
  );
}
