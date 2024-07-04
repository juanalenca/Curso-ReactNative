import React from 'react'
import {Text, StyleSheet} from 'react-native'
//importando os estilos
//../ procura fora da pasta componentes
import Estilos from '../assets/style1.js'

let nt

//passsando o props como parâmetro parar recuperaras propriedades adicionadas no APP.js
export default function (Props){
  //possibilidades de atribuição de propriedade a uma variável
  nt = Props.nota
  return(
    //acessando as propriedades através do {Props.nomeDaPropriedade}
    <Text style={Estilos.textoCursos}>Curso de {Props.curso}: {nt}</Text>
  )
}
