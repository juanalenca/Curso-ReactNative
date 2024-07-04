import React from 'react'
import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native'
import Lp from './components/ListaPlana'
import Estilos from './assets/style'


export default function App(){

  return (

    <View style={Estilos.container}>

      <Text>Hello, World!</Text>
      <Text>Curso de React Native</Text>

      <Lp/>

    </View>

  )

}





