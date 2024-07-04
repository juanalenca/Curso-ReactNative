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


export default function App(){

  let vExibir = true

  //no componenete Box criamos uma variável exibir que recebe a outra variável, a vExibir
  return (

    <View style={Estilos.container}>
      <Image
        //no souce vamos informar onde está a imagem que queremos insetir
        //source = {require("./assets/snack-icon.png")}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nicmhdAJS70_8cAaREr0tU1VutjEkJ91eIq-O_MPApdsvDq_O4VuoNlSrTmezz_EqWk&usqp=CAU' }}
        style={estilos.logo}
      />
      <Box exibir={vExibir}/>
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



