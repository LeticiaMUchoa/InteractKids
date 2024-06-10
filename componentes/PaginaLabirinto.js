import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import estilos from './estilos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveRankingLabirinto } from './firebaseConfig';

const mazeWidth = 6;
const mazeHeight = 6;
const levels = [
  [
    [0, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 2],
  ],
  [
    [0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 1],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 2],
  ],
  [
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 2],
  ],
];

const PaginaLabirinto = ({ route }) => {
  const { apelido } = route.params;
  const [maze, setMaze] = useState([]);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setMaze(
      levels[level - 1].map((row) =>
        row.map((cell) => ({ isWall: cell === 1, isGoal: cell === 2 }))
      )
    );
    setPlayerPosition({ x: 0, y: 0 });
    setGameOver(false);
    setTime(0);

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [level]);

  const movePlayer = (direction) => {
    if (gameOver) return;

    const newPosition = { ...playerPosition };
    switch (direction) {
      case 'cima':
        if (newPosition.y > 0 && !maze[newPosition.y - 1][newPosition.x].isWall) {
          newPosition.y -= 1;
        }
        break;
      case 'baixo':
        if (newPosition.y < mazeHeight - 1 && !maze[newPosition.y + 1][newPosition.x].isWall) {
          newPosition.y += 1;
        }
        break;
      case 'esquerda':
        if (newPosition.x > 0 && !maze[newPosition.y][newPosition.x - 1].isWall) {
          newPosition.x -= 1;
        }
        break;
      case 'direita':
        if (newPosition.x < mazeWidth - 1 && !maze[newPosition.y][newPosition.x + 1].isWall) {
          newPosition.x += 1;
        }
        break;
    }

    setPlayerPosition(newPosition);

    if (maze[newPosition.y][newPosition.x].isGoal) {
      setGameOver(true);
      if (level < levels.length) {
        setLevel((prevLevel) => prevLevel + 1);
      } else {
        saveRankingLabirinto(apelido, time); 
      }
    }
  };

  const restartGame = () => {
    setLevel(1);
    setGameOver(false);
    setTime(0);
  };

  const goBackToMenu = () => {
    navigation.navigate('Inicial', { apelido });
  };

  const renderMaze = () => {
    return (
      <View style={estilos.maze}>
        {maze.map((row, rowIndex) => (
          <View key={rowIndex} style={estilos.row}>
            {row.map((cell, cellIndex) => (
              <View
                key={cellIndex}
                style={[
                  estilos.cell,
                  cell.isWall && estilos.wall,
                  playerPosition.x === cellIndex && playerPosition.y === rowIndex && estilos.player,
                  cell.isGoal && estilos.goal,
                ]}
              >
                {playerPosition.x === cellIndex && playerPosition.y === rowIndex ? (
                  <Text style={estilos.rat}>🐭</Text>
                ) : cell.isGoal ? (
                  <Text style={estilos.cheese}>🧀</Text>
                ) : null}
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  const renderControls = () => {
    return (
      <View style={estilos.controls}>
        <TouchableOpacity onPress={() => movePlayer('cima')} style={estilos.controlButton}>
          <Text>⬆️</Text>
        </TouchableOpacity>
        <View style={estilos.horizontalControls}>
          <TouchableOpacity onPress={() => movePlayer('esquerda')} style={[estilos.controlButton, { marginRight: 50 }]}>
            <Text>⬅️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => movePlayer('direita')} style={[estilos.controlButton, { marginRight: 0 }]}>
            <Text>➡️</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => movePlayer('baixo')} style={estilos.controlButton}>
          <Text>⬇️</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderGameOver = () => {
    if (!gameOver) return null;

    return (
      <View style={estilos.gameOver}>
        <Text style={estilos.infoText}>PARABÉNS! VOCÊ COMPLETOU O JOGO!</Text>
        {level < levels.length ? (
          <TouchableOpacity onPress={restartGame} style={estilos.nextLevelButton}>
            <Text style={estilos.infoText}>Próximo Nível</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity onPress={restartGame} style={estilos.restartButton}>
              <Text style={estilos.textolabirinto}>↪️ Reiniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goBackToMenu} style={estilos.menuButton}>
              <Text style={estilos.textolabirinto}>↩️ Menu</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={estilos.labirintoContainer}>
      <View style={estilos.infoContainer}>
        <Text style={estilos.infoText}>LEVEL: {level}</Text>
        <Text style={estilos.infoText}>TEMPO: {time} SEGUNDOS </Text>
      </View>
      {renderMaze()}
      {renderControls()}
      {renderGameOver()}
    </View>
  );
};

export default PaginaLabirinto;