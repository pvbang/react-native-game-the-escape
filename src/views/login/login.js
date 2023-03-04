import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import color from '../../constains/color';
import RegisterScreen from '../register/register';
import MainScreen from '../home/home';
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_HERE',
});

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      // Make API request to register user with Google account
      // ...
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    if (!(username.length === 0) && !(password.length === 0)) {
      try {
        const response = await axios.post('http://localhost:3000/login', { username, password });
        if (Array.isArray(response.data) && response.data.length === 0) {
          setError('Tên đăng nhập hoặc mật khẩu không đúng.');
        } else {
          console.log(response.data);
          navigation.navigate('Main');
        }
      } catch (error) {
        console.log(error);
        setError('Lỗi kết nối với máy chủ');
      }
    } else {
      setError('Hãy nhập đầy đủ tên đăng nhập và mật khẩu.');
    }
    // navigation.navigate('Main');
  };

  const handleShowPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.logo}>The Escape</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Tên đăng nhập"
            placeholderTextColor={color.text_placeholder}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputPasswordView}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Mật khẩu"
            placeholderTextColor={color.text_placeholder}
            value={password}
            secureTextEntry={secureTextEntry}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.show} onPress={handleShowPassword}>
            <Text style={styles.textShow}>{secureTextEntry ? 'Hiện' : 'Ẩn'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSignIn}
        />
      </View>
    </ScrollView>
  );
};

const LoginStack = createNativeStackNavigator();

function LoginScreenStack() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Login">
        <LoginStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <LoginStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <LoginStack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default LoginScreenStack;
