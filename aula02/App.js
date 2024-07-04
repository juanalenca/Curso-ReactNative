//import React, {Component} from 'react'
import React from 'react'
import {View, Text} from 'react-native'
//importando o nosso componente comp1
import C1 from './Componentes/comp1' 


//Componente function
export default function App(){
  //chamando o componente importado como se fosse uma tag
  return (
    <View>
      <C1/>
      <C1/>
      <C1/>
      <C1/>
    </View>
  )
}

