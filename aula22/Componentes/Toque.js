import React, {useState}  from 'react'
import {StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
//TouchableHighlight: escurece o botão a todod clique
//TouchableOpacity: aumenta a opacidade
//TouchableWithoutFeedback: não dá feedback


export default function () {

  const [contador, setCont] = useState(0)

  const contar = () => {
    setCont(contador + 1)
  }

  return(

      <View>
      
        <TouchableHighlight style={estilos.botao} onPress={contar} underlayColor = "#008">
        
          <Text>Curso em Vídeo</Text>

        </TouchableHighlight>

        <TouchableWithoutFeedback style={estilos.botao} onPress={contar} underlayColor = "#008">
        
          <Text>Curso em Vídeo</Text>

        </TouchableWithoutFeedback>

        <TouchableOpacity style={estilos.botao} onPress={contar} underlayColor = "#008">
        
          <Text>Curso em Vídeo</Text>

        </TouchableOpacity>

        <Text>{contador}</Text>
      
      </View>

  )

}

const estilos = StyleSheet.create({

    botao:{
      alignItems: "center",
      backgroundColor: "#ccc",
      padding: 10,
      margin: 15
    }

})

