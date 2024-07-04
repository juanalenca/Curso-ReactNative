import React from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//trabalhando com os componentes externamente também
import TelaCanalExterna from '../componentes/TelaCanal'

//navegção de três tracinhos
import { createDrawerNavigator } from '@react-navigation/drawer'



const Gavetas =  createDrawerNavigator();



function telaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Tela Home</Text>
      <Text>Cursos</Text>

    </View>
  )
}


function telaCanal ({navigation}) {
  return <TelaCanalExterna nav = {navigation}/>
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

      <Gavetas.Navigator initialRouteName="Tela Inicial">

        <Gavetas.Screen
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

        <Gavetas.Screen
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

        <Gavetas.Screen
          name="Cursos"
          component={telaCursos}
          options={{ 

            title: 'Cursos',
            headerStyle: {
              backgroundColor: 'green'
            },
            headerTintColor: '#fff',
            headerTitleStyle:  {
              fontWeight: 'bold'
            }

            }}
        />
        
      </Gavetas.Navigator>

    </NavigationContainer>

  )
}







