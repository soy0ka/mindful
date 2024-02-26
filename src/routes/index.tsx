import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AppRoute} from './config'
import {HomeIcon, CalendarIcon, ChatIcon, PersonIcon} from '../assets/icons'

import {HomeScreen} from './home'
import {CalendarScreen} from './calendar'
import {CommunityScreen} from './community'
import {MyPage} from './mypage'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export const AppNavigator = (props: any): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={false}>
    <Stack.Screen name={AppRoute.HOME} component={HomeScreen} />
    <Stack.Screen name={AppRoute.MYPAGE} component={MyPage} />
  </Stack.Navigator>
)

export const BottomNavigator = (): React.ReactElement => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name={AppRoute.HOME}
      component={HomeScreen}
      options={{title: '홈', tabBarIcon(props) {
        return HomeIcon({...props, style: {width: 24, height: 24}})
      },}}
    />
    <BottomTab.Screen
      name={AppRoute.CALENDAR}
      component={CalendarScreen}
      options={{title: '달력', tabBarIcon(props) {
        return CalendarIcon({...props, style: {width: 24, height: 24}})
      },}}
    />
    <BottomTab.Screen
      name={AppRoute.COMMUNITY}
      component={CommunityScreen}
      options={{title: '소통', tabBarIcon(props) {
        return ChatIcon({...props, style: {width: 24, height: 24}})
      },}}
    />
    <BottomTab.Screen
      name={AppRoute.MYPAGE}
      component={MyPage}
      options={{
        title: '마이페이지',
        tabBarIcon(props) {
          return PersonIcon({...props, style: {width: 24, height: 24}})
        },
      }}
    />
  </BottomTab.Navigator>
)
