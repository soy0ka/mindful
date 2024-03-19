import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Button, Input, Layout, Text} from '@ui-kitten/components'
import {getUserInfo, saveUserInfo} from '../../assets/localStorageManager'

import {Record} from '../calendar/record'

const Stack = createStackNavigator()

export const HomeScreen: React.FC = (props: any) => {
  const [userInfo, setUserInfo] = React.useState<any>(null)

  React.useEffect(() => {
    getUserInfo().then((userInfo) => {
      setUserInfo(userInfo)
    })
  }, [])
  
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h4">안녕하세요 {userInfo?.name}님</Text>
      <Button onPress={() => props.navigation.navigate('HomeNav')}>
        먹은 음식 기록하기</Button>
    </Layout>
  )
}

export const MainNavigator = (props: any): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={{headerShown: true}}>
    <Stack.Screen name="Record-Nav" component={Record} options={{ title: '기록하기'}} />
  </Stack.Navigator>
)
