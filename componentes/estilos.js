// src/estilos.js
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 400,
    height: 150,
    size: 40,
    marginBottom: 10,
  },
  cartao: {
    width: '90%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#e8f578',
    elevation: 3,
  },
  campoDeEntradaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#004051',
  },
  campoDeEntrada: {
    flex: 1,
    height: 50,
    paddingLeft: 8,
    color: '#004051',
  },
  botaoDeLogin: {
    marginTop: 20,
    backgroundColor: '#004051',
    elevation: 0,
  },
  botaoDeLoginTexto: {
    color: '#FFF',
  },
  goal: {
    backgroundColor: '#FF0000', // Vermelho
  },
  labirintoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004051', // Nova cor de fundo
  },
  infoContainer: {
    padding: 20, // Adicionando padding para distanciar as palavras do resto do código
    alignItems: 'center',
  },
  infoText: {
    fontWeight: 'bold', 
    color: '#e8f578', 
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },

  textolabirinto: {
    fontWeight: 'bold', 
    color: '#004051', 
 },

  maze: {
    flexDirection: 'column',
    borderWidth: 1,
    backgroundColor: '#004051', // Nova cor de fundo
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#fff',
  },
  wall: {
    backgroundColor: '#000000', 
  },
  player: {
    width: 40,
    height: 40,
    backgroundColor: '#e8f578',
  },  

  controls: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
  },
  horizontalControls: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlButton: {
    backgroundColor: '#e8f578', 
    padding: 10, 
    alignItems: 'center', 
    marginTop: 5, 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  gameOver: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004051',
  },
  nextLevelButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#5cb85c',
  },
  rat: {
    fontSize: 25,
  },
   cheese: {
    fontSize: 25,
  },

  restartButton: {
    backgroundColor: '#e8f578', 
    padding: 10, 
    alignItems: 'center', 
    marginTop: 15, 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  menuButton: {
    backgroundColor: '#e8f578', 
    padding: 10, 
    alignItems: 'center', 
    marginTop: 10, 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)', 
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  questionCounter: {
    fontSize: 25,
    marginBottom: 20,
    color: '#e8f578', 
    fontWeight: 'bold',
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },

  animalText: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black', 
    
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionButton: {
    width: 90,
    height: 50,
    margin: 5,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  optionText: {
    fontSize: 30,
    
  },
  scoreText: {
    fontSize: 20,
    marginTop: 20,
    color: '#e8f578', 
    fontWeight: 'bold',
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,

  },
  timerText: {
    fontSize: 20,
    marginTop: 10,
    color: '#e8f578',
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
    fontWeight: 'bold',
  },
  gameOverText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e8f578', 
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e8f578',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    
  },
  startButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e8f578',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  backButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e8f578',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    color: '#004051',
    fontSize: 15,
    fontWeight: 'bold',
  },
  backgroundImage2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },
  header2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e8f578', 
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },
  stats: {
    fontSize: 15,
    marginBottom: 18,
    color: '#e8f578', 
    fontWeight: 'bold',
    textShadowColor: 'black', // Define a cor da borda
    textShadowOffset: { width: -5, height: 5 }, // Ajusta o deslocamento da sombra para simular a borda
    textShadowRadius: 10,
  },
  board2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    width: 60,
    height: 60,
    margin: 2,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2Text: {
    fontSize: 35,
  },
  button3: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e8f578',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  backButton2: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e8f578',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText2: {
    color: '#004051',
    fontWeight: 'bold',
  },
});

export default estilos;
