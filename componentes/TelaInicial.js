import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import estilos from './estilosTelaInicial';

const TelaInicial = ({ route }) => {
  const navigation = useNavigation();
  const { apelido } = route.params;

  const jogos = [
    { nome: 'Labirinto', imagem: require('../assets/imagem1.png'), rota: 'PaginaLabirinto' },
    { nome: 'Jogo da Memória', imagem: require('../assets/imagem2.png'), rota: 'PaginaJogoMemoria' },
    { nome: 'Jogo de Associação', imagem: require('../assets/imagem3.png'), rota: 'PaginaEmoji' },
  ];

  const navegarParaPagina = (rota) => {
    navigation.navigate(rota, { apelido });
  };

  const navegarParaRankings = () => {
    navigation.navigate('TelaRankings', { apelido });
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={estilos.fundo}
    >
      <View style={estilos.container}>
        <View style={estilos.header}>
          <TouchableOpacity
            style={estilos.botaoRankings}
            onPress={navegarParaRankings}
          >
            <Text style={estilos.textoBotaoRankings}>Rankings</Text>
          </TouchableOpacity>
          <Image source={require('../assets/logo.png')} style={estilos.logo} />
          <Text style={estilos.apelido}>{apelido}</Text>
        </View>
        <View style={estilos.jogosContainer}>
          {jogos.map((jogo, index) => (
            <TouchableOpacity
              key={index}
              style={estilos.jogoCard}
              onPress={() => navegarParaPagina(jogo.rota)}
              activeOpacity={0.8}
            >
              <Text style={estilos.jogoNome}>{jogo.nome}</Text>
              <Image
                source={jogo.imagem}
                style={estilos.imagemJogo}
              />
              <TouchableOpacity
                style={estilos.botaoJogar}
                onPress={() => navegarParaPagina(jogo.rota)}
              >
                <Text style={estilos.textoBotaoJogar}>    ▶️    </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaInicial;
