import * as React from 'react'
import {Layout, Text} from '@ui-kitten/components'
import { Button } from 'react-native-paper'

export const HomeScreen: React.FC = (props: any) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HOME</Text>
      <Button onPress={() => props.navigation.navigate('MyPage')}>Go to My Page</Button>
    </Layout>
  )
}
