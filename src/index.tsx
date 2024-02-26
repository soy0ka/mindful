import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {light, mapping} from '@eva-design/eva'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import {AppNavigator, BottomNavigator} from './routes/index'
import {AppRoute} from './routes/config'

export default () => {
  const isAuthorized: boolean = false

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator
              initialRouteName={isAuthorized ? AppRoute.Home : AppRoute.Home}
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  )
}
