//Testando o componenete Switch no lugar do Button
import React, {useState} from 'react'
import {View, Text, Switch} from 'react-native'


//Estado de props em componenete funcional
export default function(Props){

  const [ligado, setLigado] = useState(false)
  //varivável que recebe a função que muda o estado, setandio na função setLigado, toda vez que o botão pe aoertado
  //no lugar do (!ligado) vocÊ pode utilizar o (previousState => !previousState)
  //estado anterior recebe o estado anterior negado
  const toggleLigado = () => setLigado(!ligado)

  return(

    //parar manipular o estado usamos o this.state
      <View>

        <Text>Carro: {Props.nome} - Ligado: {ligado ? "Sim!" : "Não!"}</Text>

        <Switch
        
          trackColor = {{false:"gray", true:"#8bf"}}
          thumbColor = {ligado ? "#00f" : "#444"}
          value = {ligado}
          onValueChange = {toggleLigado}

        />

      </View>
  )

}



