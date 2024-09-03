import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home/Home';

const stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <stack.Navigator>
        <stack.Screen name='Home' component={Home}/>
    </stack.Navigator>
  )
}