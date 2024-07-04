import React from 'react'
import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native'
//é obrigatório que o nome do import começa com a letra maíscula
import Box from './components/caixas' 
import Estilos from './assets/style'


//A função pode ser criada tanto dentro da tag Button quanto fora dela, desde que a mesma seja chamada
//Seria assim: 
/*
onPress = {() => {
  Alert.alert("Mensagem:", "Curso de React Native!")
}}
*/

const msg = () => {
  Alert.alert("Mensagem:", "Curso de React Native!")
}


export default function App(){

  let vExibir = true

  return (

    <View style={Estilos.container}>

      <Button
        title = "Mostrar Menssagem"
        onPress = {msg}
      />  

      <Image
        source = {require("./assets/snack-icon.png")}
        style={Estilos.logo}
      />

      <Text style={Estilos.textoTitolo}>Hello,</Text>
      <Text style={Estilos.texto}>World!</Text>

      {vExibir && <Text>Curso de React Native</Text>}

    </View>

  )

}


/*
const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode: "contain"
  }
})
*/


