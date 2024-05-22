import * as React from 'react'
import {launchImageLibrary} from 'react-native-image-picker'
import {Layout, Text, Button, Input} from '@ui-kitten/components'
import DatePicker from 'react-native-date-picker'
import Slider from '@react-native-community/slider'
import { Image, ScrollView } from 'react-native'
import { saveFoodRecord } from '../../assets/localStorageManager' 
import { Keyboard } from 'react-native'

export const Record: React.FC = (props: any) => {
  const [date, setDate] = React.useState<Date>(new Date())
  const [hungry, setHungry] = React.useState<number>(5)
  const [satiation, setSatiation] = React.useState<number>(5)
  const [datePickerVisible, setDatePickerVisible] = React.useState(false)
  const [image, setImage] = React.useState<any>(null)
  const [food, setFood] = React.useState<string>('')

  const saveRecord = () => {
    // [{title: '2024-03-20', data: [{hour: '12:34', title: '빵', detail: '배고픔지수 1, 배부름지수 2' }]}]
    saveFoodRecord({
      title: date.toISOString().split('T')[0],
      data: [{
        hour: `${date.getHours()}:${date.getMinutes()}`,
        title: food,
        detail: `배고픔지수 ${hungry}, 배부름지수 ${satiation}`
      }]
    })
  }
  return (
    <ScrollView onTouchStart={Keyboard.dismiss} >
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Layout style={{width: '90%', marginLeft: 10, marginRight: 10, marginTop: 50}}>
        <Text category='h5'>{`기록 날짜: ${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}시${date.getMinutes()}분`}</Text>
        <Button style={{marginTop:10}}onPress={() => setDatePickerVisible(true)}>날짜 설정하기</Button>
        <Input
          multiline={true}
          style={{marginTop: 20}}
          label='먹기전 기분'
          placeholder='음식을 먹기전의 기분은 어떠했나요'
        />
        <Text category='s1' style={{marginTop: 20}}>{`배고픔 정도: ${hungry}`}</Text>
        <Slider
          step={1}
          value={hungry}
          onValueChange={(value) => setHungry(value)}
          minimumValue={0}
          maximumValue={10}
        />
        <Input
          multiline={true}
          value={food}
          onChangeText={setFood}
          style={{marginTop: 20, minHeight: 10}}
          label='먹은 음식과 양'
          placeholder='무슨 음식을 먹었나요'
        />
        <Input
          multiline={true}
          style={{marginTop: 20, minHeight: 10}}
          label='먹은후 기분'
          placeholder='음식을 먹은 후의 기분은 어떠했나요'
        />
        <Text category='s1' style={{marginTop: 20}}>{`배부름 정도: ${satiation}`}</Text>
        <Slider
          step={1}
          value={satiation}
          onValueChange={(value) => setSatiation(value)}
          minimumValue={0}
          maximumValue={10}
        />
        <Button onPress={() => launchImageLibrary({mediaType: 'photo'}, (response) => { setImage(response.assets?.[0].uri) })}>음식 사진 추가하기</Button>
        <Image source={{uri: image}} style={{width: 'auto', height: 250, marginTop: 20}} />
        <Button style={{marginTop: 20, marginBottom: 50}} onPress={saveFoodRecord}>기록하기</Button>
      </Layout>
      <DatePicker
          modal
          androidVariant="iosClone"
          title="언제 먹은 음식인가요?"
          confirmText='저장'
          cancelText='취소'
          open={datePickerVisible}
          date={date}
          onConfirm={(date) => {
            setDatePickerVisible(false)
            setDate(date)
          }}
          onCancel={() => {
            setDatePickerVisible(false)
          }}
        />
    </Layout>
    </ScrollView>
  )
}
