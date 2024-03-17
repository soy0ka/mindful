import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AppRoute} from './config'
import {useTheme} from '@ui-kitten/components'
import {HomeIcon, CalendarIcon, ChatIcon, PersonIcon} from '../assets/icons'

import {HomeScreen} from './home'
import {CalendarScreen} from './calendar'
import {CommunityScreen} from './community'
import {MyPage} from './mypage'
import { LoginScreen } from './auth'

const theme = useTheme()

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export const AppNavigator = (props: any): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={{headerShown: false}}>
    <Stack.Screen name={AppRoute.LOGIN} component={LoginScreen} />
    <Stack.Screen name="HomeStack" component={BottomNavigator} />
  </Stack.Navigator>
)

export const BottomNavigator = (props: any): React.ReactElement => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name={AppRoute.HOME}
      component={HomeScreen}
      options={{title: '홈', tabBarIcon(props) {
        return HomeIcon({style: {width: 24, height: 24}, fill: props.focused? '#3366FF': '#000'})
      },}}
    />
    <BottomTab.Screen
      name={AppRoute.CALENDAR}
      component={CalendarScreen}
      options={{title: '달력', tabBarIcon(props) {
        return CalendarIcon({style: {width: 24, height: 24}, fill: props.focused? '#3366FF': '#000'})
      },}}
    />
    <BottomTab.Screen
      name={AppRoute.COMMUNITY}
      component={CommunityScreen}
      options={{title: '소통', tabBarIcon(props) {
        return ChatIcon({style: {width: 24, height: 24}, fill: props.focused? '#3366FF' : '#000'})
      },}}
    />
    <BottomTab.Screen
      name={AppRoute.MYPAGE}
      component={MyPage}
      options={{
        title: '마이페이지',
        tabBarIcon(props) {
          return PersonIcon({style: {width: 24, height: 24}, fill: props.focused? '#3366FF': '#000'})
        },
      }}
    />
  </BottomTab.Navigator>
)
