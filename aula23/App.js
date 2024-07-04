import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Pilha = createNativeStackNavigator();



function telaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Home</Text>
      <Text>Cursos</Text>

      <Button
        title = "Ir para Tela Canal"
        onPress = {() => navigation.navigate('Canal')}
      />

    </View>
  )
}


function telaCanal({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Canal</Text>
      <Text>youtube.com</Text>

      <Button
        title = "Home"
        onPress = {() => navigation.navigate('Home')}
      />
      <Button
        title = "Voltar para tela inicial"
        onPress = {() => navigation.goBack()}
      />

    </View>
  )
}



export default function App() {
  return (

    <NavigationContainer>

      <Pilha.Navigator initialRouteName="Tela Inicial">

        <Pilha.Screen
          name="Home"
          component={telaHome}
          options={{ title: 'Tela Inicial' }}
        />

        <Pilha.Screen
          name="Canal"
          component={telaCanal}
          options={{ title: 'Tela Canal' }}
        />
        
      </Pilha.Navigator>

    </NavigationContainer>

  )
}




