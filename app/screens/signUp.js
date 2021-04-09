import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Platform,
} from 'react-native';
import colors from '../config/colors';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sendSignUpCredentials = () => {
    // console.log(username, password);
    const backendURLforSignUp = 'http://10.0.2.2:8000/app/signUp';
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
        // console.log(data);
        Alert.alert('User successfully created');
      });
  };
  const signInHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text_big}>Sign up!</Text>
      <View style={styles.topSection}>
        <Text style={styles.text_small}>Please fill the form below.</Text>
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
            value={password}
            secureTextEntry={true}
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
            title="Sign up"
            color="#4682B4"
            onPress={() => sendSignUpCredentials()}
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
            Already have an account?
          </Text>
          <Button
            style={[
              styles.btn,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginTop: 25,
              },
            ]}
            title="Sign in"
            color="#9370DB"
            onPress={() => signInHandler()}
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

export default SignUp;
