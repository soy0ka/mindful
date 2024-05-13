import * as React from 'react'
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars'
import AgendaItem from '../../assets/AgendaItem'
import {LocaleConfig} from '../../assets/calanderLocale'

export const CalendarScreen: React.FC = (props: any) => {
  const {weekView} = props
  const date = new Date().toISOString().split('T')[0]
  const ITEMS = [{title: '2024-03-20', data: [{hour: '12:34', title: '빵', detail: '배고픔지수 1, 배부름지수 2' }]}]
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
