// src/estilosTelaInicial.js
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
  apelido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },
  jogosContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jogoCard: {
    width: '80%',
    padding: 10,
    marginVertical: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  jogoNome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e8f578',
    marginBottom: 10,
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },
  imagemJogo: {
    width: 300,
    height: 100,
    aspectRatio: 3,
    marginBottom: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  jogarTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e8f578',
  },
  botaoJogar: {
    backgroundColor: '#e8f578', 
    padding: 10, 
    alignItems: 'center', 
    marginTop: 10, 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  textoBotaoJogar: {
    color: '#004051',
    fontWeight: 'bold',
  },
  botaoRankings: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e8f578',
    borderWidth: 2,
    borderColor: 'black',
  },
  textoBotaoRankings: {
    color: '#004051',
    fontWeight: 'bold',
  },
});

export default estilos;
