import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
//importando o nosso componente caixas
//é obrigatório que o nome do import começa com a letra maíscula
import Box from './components/caixas' 
import Estilos from './assets/style'


export default function App(){

  return (
    //Passagem de propriedades nos componentes
    <View style={Estilos.container}>
      <Box/>
      <Text style={Estilos.textoTitolo}>Hello,</Text>
      <Text style={Estilos.texto}>World!</Text>
    </View>

  )

}



