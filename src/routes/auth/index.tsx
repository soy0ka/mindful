import * as React from 'react'
import {Divider, Layout, Text, Button} from '@ui-kitten/components'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { saveUserInfo } from '../../assets/localStorageManager'

export const LoginScreen: React.FC = (props: any) => {
  const [user, setUser] = React.useState<any>(null)
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '963985554421-cr5l78f2p1fvg8md9pgd84ee5m5lcbkt.apps.googleusercontent.com',
      iosClientId: '963985554421-oinigojr1lmordleaitler2q395m2smf.apps.googleusercontent.com',
      offlineAccess: true,
    })
  }, [])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      setUser(userInfo)
      saveUserInfo({name: userInfo.user.name, email: userInfo.user.email, photo: userInfo.user.photo})
      props.navigation.navigate('HomeStack')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">로그인</Text>
      <Divider />
      <GoogleSigninButton onPress={signIn} />
      <Button onPress={() => props.navigation.navigate('HomeStack')}>
        로그인패스
      </Button>
    </Layout>
  )
}