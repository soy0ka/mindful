import * as React from 'react'
import {Divider, Layout, Text, Button} from '@ui-kitten/components'

export const LoginScreen: React.FC = (props: any) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">로그인</Text>
      <Divider />
      <Button onPress={() => props.navigation.navigate('HomeStack')}>로그인</Button>
    </Layout>
  )
}