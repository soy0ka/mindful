import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {HomeScreen} from './home'
import {MyPage} from './mypage'
import {AppRoute} from './config'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export const AppNavigator = (props: any): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={false}>
    <Stack.Screen name={AppRoute.Home} component={HomeScreen} />
    <Stack.Screen name={AppRoute.MYPAGE} component={MyPage} />
    {/* <BottomNavigator /> */}
  </Stack.Navigator>
)

export const BottomNavigator = (): React.ReactElement => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name={AppRoute.Home}
      component={HomeScreen}
      options={{title: 'TODO'}}
    />
    <BottomTab.Screen
      name={AppRoute.Home}
      component={HomeScreen}
      options={{title: 'PROFILE'}}
    />
  </BottomTab.Navigator>
)
