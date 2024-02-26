import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import { HomeScreen } from './home'
import {AppRoute} from './config'

const Stack = createStackNavigator()

export const AppNavigator = (props: any): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={false}>
    <Stack.Screen name={AppRoute.Home} component={HomeScreen} />
  </Stack.Navigator>
)
