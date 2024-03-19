import React from 'react'
import * as eva from '@eva-design/eva'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import {AppNavigator} from './routes/index'

export default () => {
  const isAuthorized: boolean = false

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
              <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  )
}
