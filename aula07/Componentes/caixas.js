import React from 'react'
import {View} from 'react-native'


//passsando o props como parâmetro parar recuperaras propriedades adicionadas no APP.js
export default function (Props){
  return(
    /*
    flexWrap: útil parar quando vocÊ tiver elementos que não cabem na tala ou muitos elementos alinhados de uma só vez.
    podendo quebrar esses elementos (wrap), quebrar invertido (wrap-reverse).
    temos também o flexGrow: define a proporção do tamanho dos elementos filhos. Ele redimeneciona o tamnho dos outros componenetes 
    em relação ao tramanho do que se destaca em grandeza ou sendo pequeno, vai depenede somente da logica de valores que você coloca
    */
    <View style={{width: "100%", height: 300, flexDirection: "column",justifyContent: "center", alignItems: "stretch"}}>
      <View style={{flexGrow:4, backgroundColor: "blue"}}></View>
      <View style={{flexGrow:1, backgroundColor: "#00a"}}></View>
      <View style={{flexGrow:2, backgroundColor: "#005"}}></View>
      <View style={{flexGrow:1, backgroundColor: "red"}}></View>
      <View style={{flexGrow:3, backgroundColor: "#a00"}}></View>
      <View style={{flexGrow:5, backgroundColor: "#500"}}></View>
    </View>
  )
}
