import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import SholatScreen from '../screens/SholatScreen';
import TodoScreen from '../screens/TodoScreen';
import WeatherScreen from '../screens/WeatherScreen';

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator headerMode="none" initialRouteName="Home">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Setting" component={SettingScreen} />
    <Screen name="Sholat" component={SholatScreen} />
    <Screen name="Todo" component={TodoScreen} />
    <Screen name="Weather" component={WeatherScreen} />
  </Navigator>
);

export default Stack;
