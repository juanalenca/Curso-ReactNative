import React from 'react'
import {View} from 'react-native'


//passsando o props como parâmetro parar recuperaras propriedades adicionadas no APP.js
export default function (Props){
  return(
    //style in line é com {{}}
    //flexDirection controla a posição dos componentes
    //justifyContent é o eixo principal, na horizontal
    //alingnItems é o eixo secundario, o transversal da vertical
    /*Para provar que o flexDirection é o eixo primario e o alignItems é o secundário, 
    se você esticar/stretch o elemento com o flexDirection em column, ele estica para os lados
    e não para cima*/
    <View style={{width: "100%", height: 300, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <View style={{width: 50, height: 50, backgroundColor: "blue"}}></View>
      <View style={{width: 50, height: 50, backgroundColor: "#00a"}}></View>
      <View style={{width: 50, height: 50, backgroundColor: "#005"}}></View>
    </View>
  )
}
