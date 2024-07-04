import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'




export default props => {

  return (

      <View style={estilos.bloco}>

      <Text>Informe a sua Altura: </Text>
      
      <TextInput

        style={estilos.txt}

        autoFocus={false}

        keyboardType={'numeric'}

        //Usando props.altura e convertendo para string
        value={props.altura.toString()} 

        onChangeText={(text) => props.aoModificar(text)}
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
