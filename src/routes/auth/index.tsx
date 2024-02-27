import * as React from 'react'
import {Divider, Layout, Text} from '@ui-kitten/components'
import { Button } from 'react-native-paper'

export const LoginScreen: React.FC = (props: any) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">로그인</Text>
      <Divider />
      
    </Layout>
  )
}
