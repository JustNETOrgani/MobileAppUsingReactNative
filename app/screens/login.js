import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Button,
  Alert,
} from 'react-native';
import colors from '../config/colors';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sendSignInCredentials = () => {
    // console.log(username, password);
    const backendURLforSignUp = 'http://10.0.2.2:8000/app/login';
    fetch(backendURLforSignUp, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*', // To be used to overcome cors errors
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        const numOfKeys = Object.keys(data);
        console.log('Number of keys: ', numOfKeys);
        if (numOfKeys.length < 2) {
          Alert.alert('Sign in failed!');
        } else {
          Alert.alert('Sign in successful');
        }
      });
  };
  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.text_big}>Sign in screen</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text
          style={[
            styles.text_small,
            {
              color: colors.fieldColors,
            },
          ]}>
          Username
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            value={username}
            style={[
              styles.textInput,
              {
                color: colors.fieldColors,
              },
            ]}
            onChangeText={text => setUsername(text)}
            autoCapitalize="none"
          />
        </View>
        <Text
          style={[
            styles.text_small,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              color: colors.fieldColors,
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={true}
            value={password}
            style={[
              styles.textInput,
              {
                color: colors.fieldColors,
              },
            ]}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
          />
        </View>
        <View>
          <Button
            title="Sign in"
            color="#4682B4"
            onPress={() => sendSignInCredentials()}
          />
          <Text
            style={[
              styles.text_small_italiced,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: colors.fieldColors,
                marginTop: 25,
              },
            ]}>
            Don't have an account?
          </Text>
          <Button
            style={[
              styles.btn,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginTop: 25,
              },
            ]}
            title="Sign up"
            color="#9370DB"
            onPress={() => signUpHandler()}
          />
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

export default Login;
