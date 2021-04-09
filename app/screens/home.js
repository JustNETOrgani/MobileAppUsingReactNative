/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';

const Home = ({navigation}) => {
  const signInHandler = () => {
    navigation.navigate('Login');
  };
  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Header title="Blockchain and healthcare" />
      <View style={styles.logoHolder}>
        <Animatable.Image
          animation="bounceIn"
          source={require('../assets/imgs/appLogo.jpg')}
          style={styles.appLogoImg}
        />
        <Text style={styles.text_small_italiced}>
          Transforming the health sector
        </Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomGroup}>
          <View style={{marginRight: 15}}>
            <Button title="Sign up" color="#4682B4" onPress={signUpHandler} />
          </View>
          <View>
            <Button title="Sign in" onPress={signInHandler} />
          </View>
        </View>
        <View style={styles.footerHolder}>
          <Footer title="Designed by: JustNET" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBackground,
  },
  logoHolder: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogoImg: {
    height: 110,
    width: 120,
    borderRadius: 120 / 2,
  },
  text_small_italiced: {
    color: '#05375a',
    fontSize: 21,
    fontStyle: 'italic',
    marginTop: 13,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomGroup: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  btn: {
    paddingRight: 10,
  },
});

export default Home;
