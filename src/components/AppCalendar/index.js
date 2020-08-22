import React, { useState, useContext, useEffect } from 'react';

import { Calendar, LocaleConfig } from 'react-native-calendars';

import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { darkColorScheme } from '../../colors';

import DateContext from '../../context/DateContext';

import getToday from '../../helpers/get-today';


LocaleConfig.locales.br = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set.',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};

const {
  surfaceColor,
  secondaryColor,
  secondaryColorDarkVariant,
  onBackgroundColor,
  onSecondaryColor,
} = darkColorScheme;

LocaleConfig.defaultLocale = 'br';

const styles = StyleSheet.create({
  todayButton: {

    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
    right: -10,
    top: -10,
    backgroundColor: secondaryColor,
  }
});

function AppCalendar() {
  useEffect(() => {
    setDate(selectedDate);
  }, []);

  const [selectedDate] = useState(getToday());
  const { date, setDate } = useContext(DateContext);

  return (
    <View>
      <Calendar
        disableMonthChange
        hideArrows
        onDayPress={(dateObj) => { setDate(dateObj); }}
        markingType="custom"
        markedDates={{
          [date.dateString]: {
            selected: true,
            customStyles: {
              text: {
                color: onBackgroundColor,
              },
              container: {
                backgroundColor: secondaryColorDarkVariant,
              }
            }
          },
        }}
        style={{ borderRadius: 5 }}
        theme={{
          calendarBackground: surfaceColor,
          todayTextColor: secondaryColor,
          dayTextColor: '#ffffff',
          monthTextColor: '#ffffff',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 22,
          textSectionTitleColor: '#ffffff',
          textDayHeaderFontWeight: 'bold',
          textDayHeaderFontSize: 14,
        }}
      />
      <TouchableOpacity style={styles.todayButton} onPress={() => setDate(getToday())}>
        <Ionicons name="md-calendar" size={32} color={onSecondaryColor} />
      </TouchableOpacity>
    </View>

  );
}

export default AppCalendar;
