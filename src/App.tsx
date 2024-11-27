import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Card} from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen';
import QuizScreen from './Screens/QuizScreen';

import WinScreen from './Screens/WinScreen';
import AnswerScreen from './Screens/AnswerScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Answer" component={AnswerScreen} />

        <Stack.Screen name="Win" component={WinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 35,
  },
});

export default App;
