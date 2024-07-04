//Aprendendo a enviar valores para os componentes por propriedades - Props

import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
//importando o nosso componente comp1
import C1 from './componentes/comp1' 



export default function App(){

  return (
    //Passagem de propriedades nos componentes
    <View style={estilos.container}>
      <C1 curso="React Native" nota="6" cor="pink"/>
      <C1 curso="C++" nota="7" cor="brown"/>
      <C1 curso="Java" nota="6" cor="yellow"/>
      <C1 curso="JS" nota="9" cor="violet"/>
      <Text style={estilos.txt0}>Hello,</Text>
      <Text style={{color: 'red', fontSize: 30}}>World!</Text>
    </View>

  )

}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt0:{
    color: "#0f0",
    fontSize: 30
  }
})

