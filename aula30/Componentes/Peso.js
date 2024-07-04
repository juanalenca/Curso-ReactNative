import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'




export default props => {

  return (

      <View style = {estilos.bloco}>
      
        <Text>Informe o seu Peso: </Text>
        <TextInput style = {estilos.txt}

          autoFocus = {true}

          //teclado somente numérico
          keyboardtype = {'numeric'}

          value={props.peso.toString()}

          //capturando o "aoModificar" que vir via props
          onChangeText = {text => props.aoModificar(text)}

        />
      
      </View>

  )

}




const estilos = StyleSheet.create({

  bloco:{
    marginBottom: 20
  },

  txt:{
    width: '100%',
    borderWidth: 1,
    borderColor: 'blcak',
    padding: 10,
    borderRadius: 10
  }

})
