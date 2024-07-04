//Aprendendo a enviar valores para os componentes por propriedades - Props

import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
//importando o nosso componente comp1
import C1 from '../componentes/comp1' 
import Estilos from './assets/style1'


export default function App(){

  return (
    //Passagem de propriedades nos componentes
    <View style={Estilos.container}>
      <C1 curso="React Native" nota="6"/>
      <C1 curso="C++" nota="7"/>
      <C1 curso="Java" nota="6"/>
      <C1 curso="JS" nota="9"/>
      <Text style={Estilos.textoTitolo}>Hello,</Text>
      <Text style={Estilos.texto}>World!</Text>
    </View>

  )

}



