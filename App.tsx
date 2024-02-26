import React from 'react'
import * as eva from '@eva-design/eva'
import {EvaIconsPack} from '@ui-kitten/eva-icons'
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components'

import {HomeScreen} from './pages/Home.tsx'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

export default () => (
  <HomeScreen />
  // <>
  //   <IconRegistry icons={EvaIconsPack} />
  //   <ApplicationProvider {...eva} theme={eva.light}>
  //     <HomeScreen />
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Home">
  //         <Stack.Screen name="Home" component={HomeScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </ApplicationProvider>
  // </>
)
