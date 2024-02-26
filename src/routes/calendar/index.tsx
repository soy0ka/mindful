import * as React from 'react'
import {Layout, Text} from '@ui-kitten/components'

export const CalendarScreen: React.FC = (props: any) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Calendar</Text>
    </Layout>
  )
}
