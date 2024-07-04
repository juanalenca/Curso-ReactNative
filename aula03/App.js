//import React, {Component} from 'react'
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
//importando o nosso componente comp1
import C1 from '../aula02/Componentes/comp1' 


//Componente function
export default function App(){
  //chamando o componente importado como se fosse uma tag == <C1/>
  return (
    //não é possível modificar o componentem C1, pois ele tem suas próprias formatações
    //adicionando um estilo a tag text dentro dela através do style={nomeVar.nomeEstilo}
    //caso queira adicionar um estilo dentro único, basta acrescentar um {} a mais - (style={{}})
    <View style={estilos.container}>
      <Text style={estilos.txt0}>Hello,</Text>
      <Text style={{color: 'red', fontSize: 30}}>World!</Text>
      <C1/>
      <C1/>
      <C1/>
      <C1/>
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

