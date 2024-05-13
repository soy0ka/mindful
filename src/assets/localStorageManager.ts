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

export const saveFoodRecord = async (record: any) => {
  try {
    const encodedRecord = await AsyncStorage.getItem('foodRecord')
    const foodRecord = encodedRecord ? JSON.parse(encodedRecord) : []
    foodRecord.push(record)
    await AsyncStorage.setItem('foodRecord', JSON.stringify(foodRecord))
  } catch (e) {
    console.error(e)
  }
}

export const getFoodRecord = async () => {
  try {
    const encodedRecord = await AsyncStorage.getItem('foodRecord')
    return encodedRecord ? JSON.parse(encodedRecord) : []
  } catch (e) {
    console.error(e)
  }
}