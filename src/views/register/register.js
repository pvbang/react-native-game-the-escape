import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import axios from 'axios';
import styles from './styles';
import color from '../../constains/color';
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_HERE',
});

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
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

  const handleRegister = async () => {
    if (!(username.length === 0) && !(password.length === 0) && !(password2.length === 0)) {
      if (password == password2) {
        try {
          const response = await axios.post('http://localhost:3000/users', { username, password });
          console.log(response.data);
          if (response.data) {
            setError('Đăng ký thành công.');
            navigation.goBack();
          }
        } catch (error) {
          console.log(error);
          setError('Lỗi kết nối với máy chủ.');
        }
      } else {
        setError('Mật khẩu xác nhận không giống với mật khẩu trước đó.');
      }
    } else {
      setError('Hãy nhập đầy đủ tên đăng nhập và mật khẩu 2 lần.');
    }
  };

  const handleShowPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.logo}>Đăng ký</Text>
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
        <View style={styles.inputPasswordView}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor={color.text_placeholder}
            value={password2}
            secureTextEntry={secureTextEntry}
            onChangeText={text => setPassword2(text)}
          />
          <TouchableOpacity style={styles.show} onPress={handleShowPassword}>
            <Text style={styles.textShow}>{secureTextEntry ? 'Hiện' : 'Ẩn'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
            <Text style={styles.signupText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.goBack()}>
            <Text style={styles.loginText}>Đăng nhập</Text>
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

export default RegisterScreen;
