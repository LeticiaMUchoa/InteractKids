import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, ImageBackground } from 'react-native';
import estilos from './estilos';
import { saveRankingMemoria } from './firebaseConfig';

const animals = ['🐶', '🐱', '🕷', '🦄', '🐉', '🐵', '🐸', '🐔'];

const Game = ({ navigation, route }) => {
  const { apelido } = route.params;
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [consecutiveMatches, setConsecutiveMatches] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      initializeGame();
    }
  }, [gameStarted]);

  useEffect(() => {
    let timer;
    if (isGameRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleStopGame();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameRunning]);

  const initializeGame = () => {
    const initialCards = animals.concat(animals).sort(() => Math.random() - 0.5);
    setCards(initialCards);
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setMoves(0);
    setScore(0);
    setConsecutiveMatches(0);
    setTimeLeft(300);
    setIsGameRunning(true);
  };

  const handleCardPress = (index) => {
    if (flippedIndexes.length === 2 || matchedIndexes.includes(index)) {
      return;
    }
    setFlippedIndexes([...flippedIndexes, index]);
    if (flippedIndexes.length === 1) {
      const firstIndex = flippedIndexes[0];
      if (cards[firstIndex] === cards[index]) {
        setMatchedIndexes([...matchedIndexes, firstIndex, index]);
        const newScore = score + 10 * (consecutiveMatches + 1);
        setScore(newScore);
        setConsecutiveMatches(consecutiveMatches + 1);
        setFlippedIndexes([]);
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
          setConsecutiveMatches(0);
        }, 1000);
      }
      setMoves(moves + 1);
    }
  };

  const handleStopGame = () => {
    setIsGameRunning(false);
    saveRankingMemoria(apelido, 300 - timeLeft, moves); // Salva o ranking ao finalizar o jogo
    Alert.alert(
      'Fim do Jogo',
      `Você fez ${score} pontos, com ${moves} movimentos.`,
      [{ text: 'OK' }]
    );
  };

  const renderCard = (index) => {
    const isFlipped = flippedIndexes.includes(index);
    const isMatched = matchedIndexes.includes(index);
    const cardText = isFlipped || isMatched ? cards[index] : '❓';
    return (
      <TouchableOpacity
        key={index}
        style={estilos.card2}
        onPress={() => handleCardPress(index)}
        disabled={isFlipped || isMatched}
      >
        <Text style={estilos.card2Text}>{cardText}</Text>
      </TouchableOpacity>
    );
  };

  const renderBoard = () => {
    return (
      <View style={estilos.board2}>
        {cards.map((_, index) => renderCard(index))}
      </View>
    );
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setIsGameRunning(false);
  };

  const handleGoBack = () => {
    navigation.goBack(); // Volta para a tela anterior
  };

  const allCardsMatched = cards.length > 0 && matchedIndexes.length === cards.length;

  return (
    <ImageBackground source={require('../assets/background.png')} style={estilos.backgroundImage2}>
      <View style={estilos.container2}>
        {!gameStarted ? (
          <TouchableOpacity style={estilos.button3} onPress={startGame}>
            <Text style={estilos.buttonText2}>      ▶️      </Text>
          </TouchableOpacity>
        ) : (
          <>
            <Text style={estilos.header2}>Jogo da Memória</Text>
            <Text style={estilos.stats}>Movimentos: {moves} | Pontuação: {score} | Tempo: {formatTime(timeLeft)}</Text>
            {renderBoard()}
            <TouchableOpacity style={estilos.button3} onPress={restartGame}>
              <Text style={estilos.buttonText2}>↩️ Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.button3} onPress={handleStopGame} disabled={!allCardsMatched}>
              <Text style={estilos.buttonText2}>⏸️ Pausar</Text>
            </TouchableOpacity>
          </>
        )}
        {!gameStarted && (
          <TouchableOpacity style={estilos.backButton2} onPress={handleGoBack}>
            <Text style={estilos.buttonText2}>↩️ Voltar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default Game;