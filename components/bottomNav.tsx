import React from 'react'
import {StyleSheet} from 'react-native'
import {
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
  IconProps,
} from '@ui-kitten/components'

const PersonIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="person-outline" />
)

const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home-outline" />
)

const ChatIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="message-circle-outline" />
)

const CalendarIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="calendar-outline" />
)

const useBottomNavigationState = (initialState = 0): BottomNavigationProps => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState)
  return {selectedIndex, onSelect: setSelectedIndex}
}
interface BottomTabBarProps {
  navigation: any // navigation의 타입에 따라 정확한 타입을 할당해야 합니다.
  state: {
    index: number
    routeNames: string[]
  }
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({navigation, state}) => {
  const topState = useBottomNavigationState()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return (
    <>
      <BottomNavigation
        style={styles.bottomNavigation}
        {...topState}
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title="홈" icon={HomeIcon} />
        <BottomNavigationTab title="달력" icon={CalendarIcon} />
        <BottomNavigationTab title="소통" icon={ChatIcon} />
        <BottomNavigationTab title="마이페이지" icon={PersonIcon} />
      </BottomNavigation>
    </>
  )
}

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
})
