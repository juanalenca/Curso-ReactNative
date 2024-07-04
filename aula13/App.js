import React from 'react'
import {StyleSheet, View, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import Lp from './components/ListaPlana'
import Estilos from './assets/style'


const imgbg1 = require("./assets/imagens/wallpaperPhone.jpg")
const imgbg2 = require("./assets/imagens/wallpaperPhone2.jpg")


export default function App(){

  return (
    
    //parar a imagem ser em background, é preciso usar tudo que aparecerá no app dentro da tag ImageBackground
    //e essa mesma precisa está dentro de uma view também
    <View style={Estilos.container}>

      <ImageBackground source={require(imgbg2)} style={estilos.imgFundo}>

        <View>
          <Text>Hello, World!</Text>
          <Text>Curso de React Native</Text>

          //<Lp/>
        </View>

      </ImageBackground>

    </View>

  )

}


const estilos = StyleSheet.create({
  imgFundo:{
    flex: 1,
    resizeMode: "cover",
    width: "100%"
  }
})





