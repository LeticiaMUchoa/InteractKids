// src/estilosTelaRankings.js
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent', // Isso permite a visualização do fundo
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  botaovoltarranking: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'black',
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e8f578',
    textShadowColor: 'black',
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  texto: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default estilos;
