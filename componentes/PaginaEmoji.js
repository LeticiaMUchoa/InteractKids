import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import estilos from './estilos';
import { saveRankingEmoji } from './firebaseConfig';

const animals = [
    '⚽️', '🤡', '👻', '👑', '👒', '🧜🏻‍♀️', '🔥', '👽', '☂️', '🎵', '🎅🏼', '🪐', '🍓', '🏀', '🧙'
];

const getRandomAnimal = (exclude = []) => {
    const availableAnimals = animals.filter((animal) => !exclude.includes(animal));
    return availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
};

const getRandomAnimalPair = (exclude = []) => {
    const firstAnimal = getRandomAnimal(exclude);
    const secondAnimal = getRandomAnimal([...exclude, firstAnimal]);
    return [firstAnimal, secondAnimal];
};

const Game = ({ navigation, route }) => {
    const { apelido } = route.params;
    const [currentAnimalPair, setCurrentAnimalPair] = useState([]);
    const [options, setOptions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15);
    const [totalTime, setTotalTime] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        if (gameOver) return;
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    handleOptionPress('');
                    return 15;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [gameOver, handleOptionPress]);

    useEffect(() => {
        if (gameStarted) {
            generateNewQuestion();
        }
    }, [gameStarted]);

    useEffect(() => {
        if (gameOver) {
            console.log('Fim do jogo, salvando ranking:', { apelido, totalTime, score });
            saveRankingEmoji(apelido, totalTime, score);
        }
    }, [gameOver, totalTime, score]); // Adiciona dependências para garantir que os valores finais sejam usados

    const generateNewQuestion = () => {
        const correctAnimalPair = getRandomAnimalPair();
        let wrongAnimals = [];
        while (wrongAnimals.length < 4) {
            const wrongAnimal = getRandomAnimal([...correctAnimalPair, ...wrongAnimals]);
            if (!wrongAnimals.includes(wrongAnimal)) {
                wrongAnimals.push(wrongAnimal);
            }
        }
        const shuffledOptions = [...wrongAnimals, ...correctAnimalPair].sort(() => Math.random() - 0.5);
        setCurrentAnimalPair(correctAnimalPair);
        setOptions(shuffledOptions);
        setTimeLeft(10);
        setSelectedOptions([]);
        console.log('Nova questão gerada:', correctAnimalPair, shuffledOptions);
    };

    const handleOptionPress = useCallback((option) => {
        if (selectedOptions.includes(option)) return;
        const newSelectedOptions = [...selectedOptions, option];
        setSelectedOptions(newSelectedOptions);

        if (newSelectedOptions.length === 2 || option === '') {
            const isCorrect = newSelectedOptions.every((selectedOption) => currentAnimalPair.includes(selectedOption));
            const timeSpent = 10 - timeLeft;

            setTotalTime((prevTime) => {
                const newTotalTime = prevTime + timeSpent;
                console.log('Total Time Updated:', newTotalTime);
                return newTotalTime;
            });

            if (isCorrect) {
                const pointsToAdd = 10;
                setScore((prevScore) => {
                    const newScore = prevScore + pointsToAdd;
                    console.log('Score Updated:', newScore);
                    return newScore;
                });
                setConsecutiveCorrect((prevConsecutiveCorrect) => prevConsecutiveCorrect + 1);
            } else {
                setConsecutiveCorrect(0);
            }

            if (questionIndex < 9) {
                setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
                generateNewQuestion();
            } else {
                setGameOver(true);
            }
        } else {
            setOptions((prevOptions) => prevOptions.filter((opt) => opt !== option));
        }
    }, [selectedOptions, currentAnimalPair, timeLeft, questionIndex, score, consecutiveCorrect]);

    const resetGame = () => {
        setScore(0);
        setQuestionIndex(0);
        setConsecutiveCorrect(0);
        setGameOver(false);
        setTotalTime(0);
        setGameStarted(false);
    };

    const startGame = () => {
        setGameStarted(true);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground source={require('../assets/background.png')} style={estilos.backgroundImage}>
            <View style={estilos.container1}>
                {!gameStarted ? (
                    <TouchableOpacity style={estilos.startButton} onPress={startGame}>
                        <Text style={estilos.buttonText}>    ▶️    </Text>
                    </TouchableOpacity>
                ) : gameOver ? (
                    <>
                        <Text style={estilos.gameOverText}>Fim do Jogo</Text>
                        <Text style={estilos.scoreText}>Pontuação: {score}</Text>
                        <Text style={estilos.scoreText}> Tempo Total: {totalTime} segundos </Text>
                        <TouchableOpacity style={estilos.button} onPress={resetGame}>
                            <Text style={estilos.buttonText}>↪️Reiniciar</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={estilos.questionCounter}> Acerte os Emojis: Fase {questionIndex + 1} ⏱️ </Text>
                        <Text style={estilos.animalText}> {currentAnimalPair.join(' ')} </Text>
                        <View style={estilos.optionsContainer1}>
                            {options.map((option, index) => (
                                <TouchableOpacity key={index} style={estilos.optionButton} onPress={() => handleOptionPress(option)}>
                                    <Text style={estilos.optionText}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Text style={estilos.scoreText}>Pontuação: {score}</Text>
                        <Text style={estilos.timerText}> ⏱️ Tempo restante: {timeLeft} segundos </Text>
                    </>
                )}
                {!gameStarted ? (
                    <TouchableOpacity style={estilos.backButton} onPress={handleGoBack}>
                        <Text style={estilos.buttonText}>↩️Voltar</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        </ImageBackground>
    );
};

export default Game;
