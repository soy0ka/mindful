import React from 'react'
import * as eva from '@eva-design/eva'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import {BottomNavigator} from './routes/index'
import { LoginScreen } from './routes/auth'

export default () => {
  const isAuthorized: boolean = false

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            {isAuthorized ? <BottomNavigator /> : <LoginScreen />}
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  )
}
