import React  from 'react'
import {StyleSheet, View, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import Estilos from './assets/style'
import CarroC from './components/CarroC'
import CarroF from './components/CarroF'


export default function App(){

  return (
    
    <View style={Estilos.container}>

      <CarroC nome="kwid"/>  
      <CarroC nome="Hb20"/>  
      <CarroF nome="RAM"/>  
      <CarroF nome="Ferrari"/>  

      <Text>Hello, World!</Text>
      <Text>Curso de React Native</Text>

    </View>

  )

}





