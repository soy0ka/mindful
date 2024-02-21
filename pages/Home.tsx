import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components';
import {BottomNavigationAccessoriesShowcase} from './components/bottomNav';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">HOME</Text>
  </Layout>
);
