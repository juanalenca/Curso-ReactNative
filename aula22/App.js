import React, {useState} from 'react'
import {StyleSheet, View, SafeAreaView, Text, StatusBar, Button} from 'react-native'
import Estilos from './assets/style'

//StatusBar: é a barra de status ou notificações do celular

export default function App(){

  const [cor, setCor] = useState("black")

  const mudarCor = (color) => {
    setCor(color)
  }

  return (
    
    <SafeAreaView style={Estilos.container}>

      <StatusBar 
      backgroundColor = {cor}
      barStyle="default" //cor dos itens da barra
      hidden={false} //false mostra a barra, true não mostra
      animated={true}
      translucent={false} //deixa a barra transparente
      />

      <Text>Hello, World!</Text>
      <Text>Curso de React Native</Text>
      <Text>Mude as cores da barra de status:</Text>

      <Button
        title = "Vermelho"
        onPress = {() => {mudarCor("red")}}
      />
      <Button
        title = "Azul"
        onPress = {() => {mudarCor("blue")}}
      />
      <Button
        title = "Verde"
        onPress = {() => {mudarCor("green")}}
      />
      
    </SafeAreaView>

  )

}





