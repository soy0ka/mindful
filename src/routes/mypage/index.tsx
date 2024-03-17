import * as React from 'react'
import {Card, Layout, Text} from '@ui-kitten/components'

export const MyPage: React.FC = (props: any) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card
        style={{
          width: '100%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text category="h4">마이페이지</Text>
      </Card>
    </Layout>
  )
}
