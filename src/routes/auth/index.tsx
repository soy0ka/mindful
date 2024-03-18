import * as React from 'react'
import {Divider, Layout, Text, Button} from '@ui-kitten/components'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'

export const LoginScreen: React.FC = (props: any) => {
  const [userInfo, setUserInfo] = React.useState<any>(null)
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '963985554421-kdarrs5bgdmorjdffq5h6ii7hqbk58kr.apps.googleusercontent.com',
      iosClientId: '963985554421-oinigojr1lmordleaitler2q395m2smf.apps.googleusercontent.com',
      offlineAccess: true,
    })
  }, [])

  const signIn = async () => {
    await GoogleSignin.hasPlayServices();
    setUserInfo(await GoogleSignin.signIn())
  }
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">로그인</Text>
      <Divider />
      <Button onPress={signIn}>로그인</Button>
    </Layout>
  )
}