import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import colors from '../config/colors';

const signUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_big}>Sign up screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBackground,
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  bottomSection: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  text_big: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_small: {
    color: '#05375a',
    fontSize: 18,
  },
  text_small_italiced: {
    color: '#05375a',
    fontSize: 19,
    fontStyle: 'italic',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  btn: {
    marginTop: 4,
  },
});

export default signUp;
