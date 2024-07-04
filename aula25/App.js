import React from 'react';
import { StyleSheet, View, Text, Button, aler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Pilha = createNativeStackNavigator();


//botão que quando precionado irá disparar o "navigation.navigate" para ser possível navegar na tela de 'Canal'
function telaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Home</Text>
      <Text>Cursos</Text>

      <Button
        title = "Ir para Tela Canal"
        onPress = {() => navigation.navigate('Canal')}
      />

      <Button
        title = "Ir para Tela Cursos"
        onPress = {() => navigation.navigate('Cursos')}
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


//para passar parâmetros para a tela que será disparada pelo botão (Curso React-Native), coloque separado por {} e virgulas
function telaCursos({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Cursos</Text>

      <Button
        title = "React Native"
        onPress = {() => navigation.navigate('Curso React-Native', {aulas:150, autor: 'Juan'})}
      />

    </View>

  )
}


//o "route" serve para receber os parâmetros que foram passados anteriormente pela "telaCursos"
function telaCursoReactNative({ route, navigation }) {

  //criando variáveis parar receber os respectivos parâmetros:
  //const {aulas} = route.params
  //const {autor} = route.params
  //or:
  const aulas = route.params.aulas
  const autor = route.params.autor

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Curso de React Native</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>

      <Button
        title = "Home"
        onPress = {() => navigation.navigate('Home')}
      />

      <Button
        title = "Voltar para Cursos"
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
          options={{ 

            title: 'Tela Inicial',

            headerStyle: {
              backgroundColor: '#008',
            },

            headerTintColor: '#fff',

            headerRight: () => (
              <Button
              
                title = "Cursos"
                color = "#000"
                onPress = {() => alert("Botão Cursos clicado!")}

              />
            )

            }}
        />

        <Pilha.Screen
          name="Canal"
          component={telaCanal}
          options={{ 

            title: 'Tela Canal',
            headerStyle: {
              backgroundColor: '#008',
            },
            headerTintColor: '#fff',
            headerTitleStyle:  {
              fontWeight: 'bold'
            }

            }}
        />

        <Pilha.Screen
          name="Cursos"
          component={telaCursos}
          options={{ title: 'Cursos' }}
        />

        <Pilha.Screen
          name="Curso React-Native"
          component={telaCursoReactNative}
          options={{ title: 'Curso de React-Native' }}
        />
        
      </Pilha.Navigator>

    </NavigationContainer>

  )
}




