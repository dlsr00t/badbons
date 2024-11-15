import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { loginScreen } from '../../styles/stylesLoginScreens';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API_URL = "https://866f-189-84-180-8.ngrok-free.app";

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        email,
        password,
      });

      // Se o login for bem-sucedido, salva o status de login e redireciona para o Dashboard
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.navigate('HomeTabs'); // Substitua 'HomeTabs' pelo nome correto da sua tela
    } catch (error) {
      setError('Falha no login. Verifique suas credenciais.');
      Alert.alert('Erro', 'Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <View style={loginScreen.overall}>
      <Text style={loginScreen.titulo}>Login</Text>
      <TextInput
        style={loginScreen.entrada}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={loginScreen.entrada}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4376e6', '#0233a1']}
        style={loginScreen.linearGradient}
      >
        <TouchableOpacity style={loginScreen.button} onPress={handleLogin}>
          <Text style={{fontWeight:"bold",alignItems:"center",color:"white",fontSize:22}}>Entrar</Text>
        </TouchableOpacity>
      </LinearGradient>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
