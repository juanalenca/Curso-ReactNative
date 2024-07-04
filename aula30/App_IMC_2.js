import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import Peso from '../componentes/Peso'
import Altura from '../componentes/Altura'
import BtnCalcular from '../componentes/BtnCalcular'
import Resultado from '../componentes/Resultado'
import Tabela from '../componentes/Tabela'




export default function CalculadoraIMC() {


  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcIMC = () => {

    if(peso == 0 || !peso){
      alert("Por favor, informe um peso válido!")
    }

    if(altura == 0 || !altura){
      alert("Por favor, informe uma altura válida!")
    }

    //elevando a altura ao quadrado:
    const result = peso/(Math.pow(altura, 2))

    //utilizando o método para arredondar o resultado para 1 casa decimal
    setResultado(result.toFixed(1))

  }
 

  return (
      
    <SafeAreaView style = {estilos.body}>

      <View style = {estilos.bloco}><Text>Calculadora de IMC</Text></View>


      <Peso aoModificar={setPeso} peso={peso}/>


      <Altura aoModificar={setAltura} altura={altura}/>


      <BtnCalcular aoCLicar = {calcIMC}/>


      <Resultado resultado = {resultado}/>


      <Tabela/>

    </SafeAreaView>

  )

}




const estilos = StyleSheet.create({

  body:{
    margin: 10
  },

  bloco:{
    marginBottom: 20
  }

})



