import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
//importando o nosso componente caixas
//é obrigatório que o nome do import começa com a letra maíscula
import Box from './components/caixas' 
import Estilos from './assets/style'


//pode ser tanto function normal quanto arrow function
//e a function pode ser feita fora ou dentro da function principal do App
const fExibir = (vp1) => {
  if(vp1 == true){
    return(<Text>Curso de React Native</Text>)
  }else{
    return(<Text> - - - - - - - </Text>)
  }
}

/*

Chamada de qualquer função {nomeFunction(parâmetro)}.

Arrow function (função anônima): atribui os parâmetros para dentro da função
() => {}

Caso tenha somente um parâmetron não precisa colocar parênteses:
num => {
  return num*2
}

Caso seja um bloco de ocmandos muito simples, vocÊ pode tirar o return e as {}:
const soma = (n1,n2) => n1+n2

*/

//Criando uma função simples
function dobro (num){
  return num*2
}

//Criando arrow function - precisa estar associado a uma variável
const soma = (n1,n2) => {
  return n1+n2
}


export default function App(){

  let vExibir = true

  return (

    <View style={Estilos.container}>

      <Text>{dobro(2)}</Text>
      <Text>{soma(2, 6)}</Text>

      <Image
        //no souce vamos informar onde está a imagem que queremos insetir
        // source={{ uri: 'https://www.tryparrotai.com/_next/image?url=%2FdavidG.webp&w=256&q=75' }}
        source = {require("./assets/snack-icon.png")}
        style={estilos.logo}
      />

      <Text style={Estilos.textoTitolo}>Hello,</Text>
      <Text style={Estilos.texto}>World!</Text>

      {vExibir && <Text>Curso de React Native</Text>}

    </View>

  )

}


const estilos = StyleSheet.create({
  logo:{
    width: 250,
    //o "contain" vai ajustar a imagem em relação a width que colocamos anteriormente
    resizeMode: "contain"
  }
})



