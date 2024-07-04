import React from 'react'
import { StyleSheet, View, Image } from 'react-native'




export default function Tabela() {

  return (

      <View style = {estilos.bloco}>
      
        <Image 
          source = {require('../assets/imgimc.png')}
          style = {estilos.tabela}
        />
      
      </View>

  )

}




const estilos = StyleSheet.create({
  
  bloco:{
    marginBottom: 20
  },
  
  tabela:{
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignContent: 'center'
  }

})