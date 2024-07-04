import React, {Component} from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import Globais from '../Componentes/Globais'



export default class App extends Component {

  //atribuindo, nas variáveis "nome/canal/numero", os respectivos valores das variáveis que estão no componente "Globais"
  nome = Globais.nome
  canal = Globais.canal
  numero = Globais.numero
  
  render() {

    return (
      
      //chamandos as variáveis que receberam os valores das variáveis do componente "Globais"
      <View>

        <Text>Nome: {this.nome}</Text>
        <Text>Canal: {this.canal}</Text>
        <Text>Número: {this.numero}</Text>

      </View>

    )

  }

}







