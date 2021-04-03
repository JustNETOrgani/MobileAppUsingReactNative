import 'react-native-gesture-handler'; // Must always be imported for navigation.
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './app/routes/homeStack';

const App = () => {
  return <Navigator />;
};

export default App;
