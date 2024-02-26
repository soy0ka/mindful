import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon, IconElement, IconProps} from '@ui-kitten/components'
import {AppRoute} from './config'

import {HomeScreen} from './home'
import {CalendarScreen} from './calendar'
import { CommunityScreen } from './community'
import {MyPage} from './mypage'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export const AppNavigator = (props: any): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={false}>
    <Stack.Screen name={AppRoute.HOME} component={HomeScreen} />
    <Stack.Screen name={AppRoute.MYPAGE} component={MyPage} />
  </Stack.Navigator>
)

const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home-outline" />
)

const CalendarIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="calendar-outline" />
)

const ChatIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="message-circle-outline" />
)


const PersonIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="person-outline" />
)


export const BottomNavigator = (): React.ReactElement => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name={AppRoute.HOME}
      component={HomeScreen}
      options={{title: '홈', tabBarIcon: HomeIcon}}
    />
    <BottomTab.Screen
      name={AppRoute.CALENDAR}
      component={CalendarScreen}
      options={{title: '달력', tabBarIcon: CalendarIcon}}
    />
    <BottomTab.Screen
      name={AppRoute.COMMUNITY}
      component={CommunityScreen}
      options={{title: '소통', tabBarIcon: ChatIcon}}
    />
    <BottomTab.Screen
      name={AppRoute.MYPAGE}
      component={MyPage}
      options={{title: '마이페이지', tabBarIcon: PersonIcon}}
    />
  </BottomTab.Navigator>
)
