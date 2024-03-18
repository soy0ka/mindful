import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveUserInfo = async (userInfo: any) => {
  try {
    await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
  } catch (e) {
    console.error(e)
  }
}

export const getUserInfo = async () => {
  try {
    const encodedUserInfo = await AsyncStorage.getItem('userInfo')
    return encodedUserInfo ? JSON.parse(encodedUserInfo) : null
  } catch (e) {
    console.error(e)
  }
}