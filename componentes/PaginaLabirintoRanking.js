import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import estilos from './estilosTelaRankings';
import { getRankingLabirinto } from './firebaseConfig';

const PaginaLabirintoRanking = () => {
  const navigation = useNavigation();
  const { apelido } = useRoute().params;
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      const labirintoRanking = await getRankingLabirinto();
      setRankings(labirintoRanking);
    };
    fetchRankings();
  }, []);

  const voltarParaTelaRankings = () => {
    navigation.navigate('TelaRankings', { apelido });
  };

  return (
    <ImageBackground source={require('../assets/background.png')} style={estilos.fundo}>
      <View style={estilos.container}>
        <View style={estilos.header}>
          <TouchableOpacity onPress={voltarParaTelaRankings}>
            <Text style={estilos.botaovoltarranking}>↩️ Voltar</Text>
          </TouchableOpacity>
          <Image source={require('../assets/logo.png')} style={estilos.logo} />
        </View>
        <Text style={estilos.titulo}>🏆 Rankings</Text>
        <ScrollView contentContainerStyle={estilos.scrollContainer}>
          {rankings.map((ranking, index) => (
            <View key={index} style={estilos.item}>
              <Text style={estilos.posicao}>{`${index + 1}° Lugar: ${ranking.apelido}`}</Text>
              <Text style={estilos.tempo}>Tempo: {ranking.time} segundos</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default PaginaLabirintoRanking;
