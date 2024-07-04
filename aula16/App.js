/*Componente safe Are View: faz a renderização do conteúdo 
dentro dos limites da segurança do dispositivo. 
Seve como container principal do app e cumpre a mesma função do View, 
porêm é mais seguro*/

import React  from 'react'
import {StyleSheet, View, SafeAreaView, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import Estilos from './assets/style'
import CarroF from './components/CarroF'


export default function App(){

  return (
    
    <SafeAreaView style={Estilos.container}>

      <Text>Hello, World!</Text>
      <Text>Curso de React Native</Text>
       
      <CarroF nome="RAM"/>  
      <CarroF nome="Ferrari"/>  

    </SafeAreaView>

  )

}





