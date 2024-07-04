import React  from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import Estilos from './assets/style'
import CarroF from './components/CarroF'
import Ct from './components/CaixaDeTexto'
import Rolagem from './components/Rolagem'


export default function App(){

  return (
    
    <SafeAreaView style={Estilos.container}>

      <Text>Hello, World!</Text>
      <Text>Curso de React Native</Text>

      <Rolagem/>

    </SafeAreaView>

  )

}





