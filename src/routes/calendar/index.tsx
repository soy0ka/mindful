import * as React from 'react'
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars'
import AgendaItem from '../../assets/AgendaItem'
import {LocaleConfig} from '../../assets/calanderLocale'
import { getFoodRecord } from '../../assets/localStorageManager' 

export const CalendarScreen: React.FC = (props: any) => {
  const {weekView} = props
  const date = new Date().toISOString().split('T')[0]
  const ITEMS = getFoodRecord() as any
  const renderItem = React.useCallback(({item}: any) => {
    return <AgendaItem item={item}/>
  }, [])
 
  return (
    <CalendarProvider date={date} showTodayButton {...LocaleConfig}>
      {weekView ? (
        <WeekCalendar firstDay={1} />
      ) : (
        <>
          <ExpandableCalendar firstDay={1}/>
          <AgendaList sections={ITEMS} renderItem={renderItem} />
        </>
      )}
    </CalendarProvider>
  )
}
