import * as React from 'react'
import {Button, Input, Layout, Text} from '@ui-kitten/components'
import {getUserInfo, saveUserInfo} from '../../assets/localStorageManager'

export const HomeScreen: React.FC = (props: any) => {
  const [userInfo, setUserInfo] = React.useState<any>(null)

  React.useEffect(() => {
    // saveUserInfo({name: '요루'})
    getUserInfo().then((userInfo) => {
      setUserInfo(userInfo)
    })
  }, [])
  
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h4">안녕하세요 {userInfo?.name}님</Text>
      <Button onPress={() => props.navigation.navigate('Login')}>
        먹은 음식 기록하기</Button>
    </Layout>
  )
}
