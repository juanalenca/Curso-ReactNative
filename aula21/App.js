import React  from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import Estilos from './assets/style'
import R1 from './components/RolagemcomRefresh'



export default function App(){

  return (
    
    <SafeAreaView style={Estilos.container}>

      <Text>Hello, World!</Text>
      <Text>Curso de React Native</Text>

      <R1/>
      
    </SafeAreaView>

  )

}





