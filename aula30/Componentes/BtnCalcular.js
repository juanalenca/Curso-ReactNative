import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'




export default props => {

  return (

      <View style = {estilos.bloco}>
      
        <TouchableHighlight 
        style = {estilos.btnCalc} 
        onPress = {() => props.aoClicar()}>
        
          <Text style = {estilos.txtbtn}>Calcular IMC</Text>

        </TouchableHighlight>
      
      </View>


  )

}




const estilos = StyleSheet.create({

  bloco:{
    marginBottom: 20
  },

  txtbtn:{
    fontSize:15,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff'
  },

  btnCalc:{
    backgroundColor: '#048',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    padding: 10
  }

})
