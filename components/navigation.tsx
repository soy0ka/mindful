import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {BottomTabBar} from './bottomNav.tsx'
import {HomeScreen} from '../pages/Home.tsx'
import {MyPage} from '../pages/MyPage.tsx'

const {Navigator, Screen} = createBottomTabNavigator()

const HomeNavigator: React.FC = () => {
  return (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="MyPage" component={MyPage} />
    </Navigator>
  )
}

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}
