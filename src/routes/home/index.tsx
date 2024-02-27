import * as React from 'react'
import {Button, Input, Layout, Text} from '@ui-kitten/components'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const HomeScreen: React.FC = (props: any) => {
  const [token, setToken] = React.useState<string | null>(null)
  const [displayToken, setDisplayToken] = React.useState<string | null>(null)
  React.useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token')
      setDisplayToken(token)
    }
    fetchToken()
  },[])

  const handleSave = async(event: any) => {
    await AsyncStorage.setItem('token', token ? token : 'blank')
  }

  const handleLoad = async(event: any) => {
    const token = await AsyncStorage.getItem('token')
    setDisplayToken(token)
  }
  
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HOME</Text>
      <Input placeholder="Basic Usage" onChangeText={(nextValue) => setToken(nextValue)} />
      <Button onPress={handleSave}>저장</Button>
      <Button onPress={handleLoad}>불러오기</Button>
      {displayToken && <Text category="h6">{displayToken}</Text>}
    </Layout>
  )
}
