import React, {Component} from 'react'
//é preciso importar os componentes que serão utilizados
import {View, Text} from 'react-native'


//Componente de classe
export default class App1 extends Component{
  render(){
    return(
      <View>
      <View>
        <Text>Juan</Text>
        <Text>Olá, mundo!</Text>
      </View>
      <View>
        <Text>Fulano</Text>
        <Text>Olá você</Text>
      </View>
    </View>
    )
  }
}


/*Componente function

export default function App(){
  return (
     //View é equivalente ao div no html
     //e text é como se fosse a tag p
    <View>
      <View>
        <Text>Juan</Text>
        <Text>Olá, mundo!</Text>
      </View>
      <View>
        <Text>Fulano</Text>
        <Text>Olá você</Text>
      </View>
    </View>
  )
}
*/