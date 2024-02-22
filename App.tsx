import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {BottomNavigationAccessoriesShowcase} from './components/bottomNav';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';

export default () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home />
      <BottomNavigationAccessoriesShowcase />
    </ApplicationProvider>
  </NavigationContainer>
);
