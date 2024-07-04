import React from 'react'
import {View} from 'react-native'


//passsando o props como parâmetro parar recuperaras propriedades adicionadas no APP.js
export default function (Props){
  return(
    <View style={{width: "100%", height: 300, flexDirection: "column",justifyContent: "center", alignItems: "stretch"}}>

      {
        Props.exibir ?
          <View style={{flex: 1}}>
            <View style={{flexGrow:4, backgroundColor: "blue"}}></View>
            <View style={{flexGrow:1, backgroundColor: "#00a"}}></View>
            <View style={{flexGrow:2, backgroundColor: "#005"}}></View>
            <View style={{flexGrow:1, backgroundColor: "red"}}></View>
            <View style={{flexGrow:3, backgroundColor: "#a00"}}></View>
            <View style={{flexGrow:5, backgroundColor: "#500"}}></View>
          </View>      
        :
          <View style={{flex: 1}}>
            <View style={{flexGrow:1, backgroundColor: "red"}}></View>
            <View style={{flexGrow:3, backgroundColor: "#a00"}}></View>
            <View style={{flexGrow:5, backgroundColor: "#500"}}></View>
          </View>          
      }

    </View>
  )
}
