/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [options] = useState([
    {
      invoiceID: 'TEST-01',
      date: 'November 28, 2022 9:32 AM',
      itemsPurchased: 2,
      items: 'avocado,bread',
      card: '4024-0071-0215-5826',
      total: '$3.28',
    },
    {
      invoiceID: 'TEST-02',
      date: 'November 28, 2022 9:33 AM',
      itemsPurchased: 6,
      items: 'poptarts,apple,butter,beer,sprite,avocado',
      card: '4716-5300-1533-8836',
      total: '$27.53',
    },
    {
      invoiceID: 'TEST-03',
      date: 'November 28, 2022 9:33 AM',
      itemsPurchased: 4,
      items: 'milk,bread,mentos,apple',
      card: '4532-8943-6244-1862',
      total: '$8.77',
    },
    {
      invoiceID: 'TEST-04',
      date: 'November 28, 2022 9:33 AM',
      itemsPurchased: 8,
      items: 'cereal,sprite,beer,eggs,eggs,apple,avocado,juice',
      card: '4094-0350-3682-3412',
      total: '$30.63',
    },
    {
      invoiceID: 'TEST-05',
      date: 'November 28, 2022 9:33 AM',
      itemsPurchased: 1,
      items: 'milk',
      card: '4532-9424-2716-7723',
      total: '$2.29',
    },
  ]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <View {...getAccesibility({name: 'Container'})}>
        <ScrollView>
          {options.map(option => (
            <View
              key={option.invoiceID}
              {...getAccesibility({name: option.invoiceID})}>
              <Text>{option.date}</Text>
              <Text>{option.itemsPurchased}</Text>
              <Text>{option.items}</Text>
              <Text>{option.card}</Text>
              <Text>{option.total}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const getAccesibility = ({name, description, isAccessible = true}) => ({
  testID: name,
  accessibilityLabel: name,
  accessible: isAccessible,
});

export default App;
