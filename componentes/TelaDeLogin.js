// TelaDeLogin.js
import React, { useState } from 'react';
import { View, TextInput, Image, Alert, ImageBackground } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';

const TelaDeLogin = () => {
  const [apelido, setApelido] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (apelido) {
      Alert.alert('Login Bem-Sucedido', `Bem-vindo, ${apelido}!`);
      navigation.navigate('Inicial', { apelido }); // Passando o apelido como parâmetro
    } else {
      Alert.alert('Falha no Login', 'Por favor, insira um apelido.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={estilos.fundo}>
      <View style={estilos.container}>
        <Image source={require('../assets/logo.png')} style={estilos.logo} />
        <Card style={estilos.cartao}>
          <View style={estilos.campoDeEntradaContainer}>
            <MaterialIcons name="person" size={24} color="#004051" />
            <TextInput
              style={estilos.campoDeEntrada}
              value={apelido}
              onChangeText={setApelido}
              placeholder="Apelido"
              placeholderTextColor="#004051"
            />
          </View>
          <Button
            mode="contained"
            onPress={handleLogin}
            style={estilos.botaoDeLogin}
            labelStyle={estilos.botaoDeLoginTexto}>
            Iniciar
          </Button>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default TelaDeLogin;
