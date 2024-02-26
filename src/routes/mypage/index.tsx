import * as React from 'react'
import {Layout, Text} from '@ui-kitten/components'

export const MyPage: React.FC = (props: any) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">MY PAGE</Text>
    </Layout>
  )
}
