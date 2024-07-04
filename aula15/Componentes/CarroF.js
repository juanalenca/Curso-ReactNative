//como é um componenete de classe, importamos o {useState}
import React, {useState} from 'react'
import {View, Text, Button} from 'react-native'


//Estado de props em componenete funcional
export default function(Props){

  const [ligado, setLigado] = useState(true)

  return(

    //parar manipular o estado usamos o this.state
      <View>

        <Text>Carro: {Props.nome} - Ligado: {ligado ? "Sim!" : "Não!"}</Text>

        <Button

          title = {ligado ? "Desligar" : "Ligar"}

          onPress = {
            //vamos alterar o valor do state a cada vez que o botão é apertado
            //parar manipular o estado no useState fazemos referencia a sua função setLigado(!ligado)
            //neste caso, vai recebe o oposto do estado
            () => {setLigado(!ligado)}
          }

        />

      </View>
  )

}



