import React from 'react'
import * as eva from '@eva-design/eva'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import {BottomNavigator} from './routes/index'

export default () => {
  const isAuthorized: boolean = false

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} mapping={eva.mapping} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  )
}
