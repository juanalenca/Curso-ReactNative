import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default function (){
  //adicionando um estilo a tag text dentro dela através do style={nomeVar.nomeEstilo}
  return(
    <Text style={estilos.txt2}>Minha rola</Text>
  )
}

//funções css
//Aqui contem todos os estilos que vamos usar nos nossos componentes
//Essas formatações, txt1 e txt2, só podem ser chamadas dentro do comp1 e não fora dele
const estilos = StyleSheet.create({
  
  txt1:{
    color: "#f00",
    fontSize: 20
  },
  txt2:{
    color: "#00f",
    fontSize: 10
  }

})