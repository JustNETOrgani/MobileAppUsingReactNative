/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Blockchain and healthcare" />
      <View style={styles.logoHolder}>
        <Image
          source={require('./assets/imgs/appLogo.jpg')}
          style={styles.appLogoImg}
        />
      </View>
      <View style={styles.footerHolder}>
        <Footer title="Designed by: JustNET" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoHolder: {
    flex: 3,
    padding: 220,
  },
  appLogoImg: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
  },
  footerHolder: {
    flex: 1,
  },
});

export default App;
