/*Estado: armazeno o valor dentro do estado e eu posso alterar ou ler o valor desse estado.
PAra usálo, precisamos importá-lo no import do react abaixo*/

import React, {useState}  from 'react'
import {StyleSheet, View, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import Lp from './components/ListaPlana'
import Estilos from './assets/style'


export default function App(){

  /*
  Temos um array onde vamos definir o nome do estado (ligado), o nome da função (setLigado)
  e definir que isso esse array é um estado, precisamos fazê-lo receber o 
  useState(parâmetro inicial que será recebido pelo estado), que é igual a: const ligado = true.
  Se fosse uma variável comum, não daria certo, porque os componentes não conseguem interagir com as variáveis em tempo real,
  temos que utilizar o useState
  */
  const [ligado, setLigado] = useState(true)


  return (
    
    //passamos a lógica do useState através de {nomeState ? condiçãoTrue : condiçãoFlase}  
    <View style={Estilos.container}>

    <Button
        //o título vai mudar de acordo com o estado do useState "ligado"
        title={ligado ? "Desligar" : "Ligar"}

        //toda vez que o botão é clicado, o parâmetro, da função do useState setLigado, 
        //vai recber a negação do seu parâmetro anterior, que é o ligado
        onPress={() => setLigado(!ligado)}
    />

    {ligado ?
        <View>

            <Text>Hello, World!</Text>
            <Text>Curso de React Native</Text>

            {/* <Lp/> */}

        </View>
        :
        <Text>* * *</Text>
    }

</View>

  )

}


/*
const estilos = StyleSheet.create({
  imgFundo:{
    flex: 1,
    resizeMode: "cover",
    width: "100%"
  }
})
*/




