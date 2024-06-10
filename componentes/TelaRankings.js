import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilosTelaRankings';
import { getRankingLabirinto, getRankingMemoria, getRankingEmoji } from './firebaseConfig';

const TelaRankings = ({ route }) => {
  const navigation = useNavigation();
  const { apelido } = route.params;
  const [rankings, setRankings] = useState({});

  useEffect(() => {
    const fetchRankings = async () => {
      const labirintoRanking = await getRankingLabirinto();
      const memoriaRanking = await getRankingMemoria();
      const emojiRanking = await getRankingEmoji();
      setRankings({ labirinto: labirintoRanking, memoria: memoriaRanking, emoji: emojiRanking });
    };
    fetchRankings();
  }, []);

  const jogos = [
    { nome: 'Labirinto', imagem: require('../assets/imagem1.png'), rota: 'PaginaLabirintoRanking' },
    { nome: 'Jogo da Memória', imagem: require('../assets/imagem2.png'), rota: 'PaginaJogoMemoriaRanking' },
    { nome: 'Jogo de Associação', imagem: require('../assets/imagem3.png'), rota: 'PaginaEmojiRanking' },
  ];

  const navegarParaPagina = (rota) => {
    navigation.navigate(rota, { apelido });
  };

  const voltarParaTelaInicial = () => {
    navigation.navigate('Inicial', { apelido });
  };

  const renderRankingItem = ({ item }) => (
    <Text>{item.apelido}: {item.time}</Text>
  );

  return (
    <ImageBackground source={require('../assets/background.png')} style={estilos.fundo}>
      <View style={estilos.container}>
        <View style={estilos.header}>
          <TouchableOpacity onPress={voltarParaTelaInicial}>
            <Text style={estilos.botaovoltarranking}>↩️ Voltar</Text>
          </TouchableOpacity>
          <Image source={require('../assets/logo.png')} style={estilos.logo} />
        </View>
        <View style={estilos.rankingContainer}>
          {Object.keys(rankings).map((jogo, index) => (
            <View key={index}>
              <Text style={estilos.titulo}>{`Ranking ${jogo}`}</Text>
              <FlatList data={rankings[jogo]} renderItem={renderRankingItem} keyExtractor={(item, index) => index.toString()} />
            </View>
          ))}
        </View>
        <View style={estilos.jogosContainer}>
          {jogos.map((jogo, index) => (
            <TouchableOpacity key={index} style={estilos.jogoCard} onPress={() => navegarParaPagina(jogo.rota)} activeOpacity={0.8}>
              <Text style={estilos.jogoNome}>{jogo.nome}</Text>
              <Image source={jogo.imagem} style={estilos.imagemJogo} />
              <TouchableOpacity style={estilos.botaoJogar} onPress={() => navegarParaPagina(jogo.rota)}>
                <Text style={estilos.textoBotaoJogar}>🏆 Rankings</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaRankings;