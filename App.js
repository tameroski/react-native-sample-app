import React from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import Test from './Test';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Test: { screen: Test },
});

export default App;