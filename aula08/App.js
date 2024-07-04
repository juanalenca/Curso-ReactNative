import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
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


export default function App(){

  let vExibir = true

  return (
    //Passagem de propriedades nos componentes
    //{vExibir && <Text>Curso de React Native</Text>} - forma mais simplificada que imprme só um valor
    //passsando o vExivbir para o componenete box de components 
    <View style={Estilos.container}>
      <Box exibir={vExibir}/>
      <Text style={Estilos.textoTitolo}>Hello,</Text>
      <Text style={Estilos.texto}>World!</Text>
      {vExibir?<Text>Curso de React Native</Text>:<Text> - - - - - - - </Text>}
    </View>

  )

}



