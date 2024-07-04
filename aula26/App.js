import React from 'react';
import { StyleSheet, View, Text, Button, aler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//faz uma barra de botões de navegação já imbutida dentro do app



const Guias = createBottomTabNavigator();



function telaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Home</Text>
      <Text>Cursos</Text>

    </View>
  )
}


function telaCanal({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Canal</Text>
      <Text>youtube.com</Text>

    </View>
  )
}


function telaCursos({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Cursos</Text>

    </View>

  )
}



export default function App() {
  return (

    <NavigationContainer>

      <Guias.Navigator initialRouteName="Tela Inicial">

        <Guias.Screen
          name="Home"
          component={telaHome}
          options={{ 

            title: 'Tela Inicial',

            headerStyle: {
              backgroundColor: '#008'
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

        <Guias.Screen
          name="Canal"
          component={telaCanal}
          options={{ 

            title: 'Tela Canal',
            headerStyle: {
              backgroundColor: '#008'
            },
            headerTintColor: '#fff',
            headerTitleStyle:  {
              fontWeight: 'bold'
            }

            }}
        />

        <Guias.Screen
          name="Cursos"
          component={telaCursos}
          options={{ 

            title: 'Cursos',
            headerStyle: {
              backgroundColor: 'green'
            }

            }}
        />
        
      </Guias.Navigator>

    </NavigationContainer>

  )
}

