/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Image, Button, Alert} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({navigation}) => {
  const signInHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Header title="Blockchain and healthcare" />
      <View style={styles.logoHolder}>
        <Image
          source={require('../assets/imgs/appLogo.jpg')}
          style={styles.appLogoImg}
        />
      </View>
      <View style={styles.btnHolder}>
        <Button
          style={styles.btn}
          title="Sign up"
          color="#4682B4"
          onPress={() => Alert.alert('Sign in button pressed')}
        />
        <Button style={styles.btn} title="Sign in" onPress={signInHandler} />
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
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoHolder: {
    padding: 220,
  },
  appLogoImg: {
    height: 110,
    width: 120,
    borderRadius: 120 / 2,
  },
  btnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginRight: 10,
  },
});

export default Home;
