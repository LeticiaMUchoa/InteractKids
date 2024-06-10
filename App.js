import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeLogin from './componentes/TelaDeLogin';
import TelaInicial from './componentes/TelaInicial';
import PaginaLabirinto from './componentes/PaginaLabirinto';
import PaginaEmoji from './componentes/PaginaEmoji';
import PaginaJogoMemoria from './componentes/PaginaJogoMemoria';
import TelaRankings from './componentes/TelaRankings';
import PaginaLabirintoRanking from './componentes/PaginaLabirintoRanking';
import PaginaJogoMemoriaRanking from './componentes/PaginaJogoMemoriaRanking';
import PaginaEmojiRanking from './componentes/PaginaEmojiRanking';

const Stack = createStackNavigator();

const App = () => {
  const [apelido, setApelido] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {props => <TelaDeLogin {...props} setApelido={setApelido} />}
        </Stack.Screen>
        <Stack.Screen name="Inicial">
          {props => <TelaInicial {...props} apelido={apelido} />}
        </Stack.Screen>
        <Stack.Screen name="PaginaLabirinto">
          {props => <PaginaLabirinto {...props} apelido={apelido} />}
        </Stack.Screen>
        <Stack.Screen name="PaginaEmoji">
          {props => <PaginaEmoji {...props} apelido={apelido} />}
        </Stack.Screen>
        <Stack.Screen name="PaginaJogoMemoria">
          {props => <PaginaJogoMemoria {...props} apelido={apelido} />}
        </Stack.Screen>
        <Stack.Screen name="TelaRankings">
          {props => <TelaRankings {...props} apelido={apelido} />}
        </Stack.Screen>
        <Stack.Screen name="PaginaLabirintoRanking" component={PaginaLabirintoRanking} />
        <Stack.Screen name="PaginaJogoMemoriaRanking" component={PaginaJogoMemoriaRanking} />
        <Stack.Screen name="PaginaEmojiRanking" component={PaginaEmojiRanking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
