import React from 'react'
import {Text, StyleSheet} from 'react-native'


let nt, cor

//passsando o props como parâmetro parar recuperaras propriedades adicionadas no APP.js
export default function (Props){
  //possibilidades de atribuição de propriedade a uma variável
  nt = Props.nota
  cor = Props.cor
  return(
    //acessando as propriedades através do {Props.nomeDaPropriedade}
    //é necesário transformação o style em array quando se coloca mais que uma modificação
    <Text style={[estilos.txt2, {color:cor}]}>Curso de {Props.curso}: {nt}</Text>
  )
}


const estilos = StyleSheet.create({
  
  txt1:{
    //color: "#f00",
    fontSize: 20
  },
  txt2:{
    color: "#00f",
    fontSize: 10
  }

})