import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, View, Text, TouchableHighlight, TextInput } from 'react-native'




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


      <View style = {estilos.bloco}>
      
        <Text>Informe o seu Peso: </Text>
        <TextInput style = {estilos.txt}

          autoFocus = {true}

          //teclado somente numérico
          keyboardtype = {'numeric'}

          value = {peso}

          //passando o conteudo digitado na caixa de texto para a function do "peso", a "setPeso". isso é feito através da arrow function
          onChangeText = {text => setPeso(text)}

        />
      
      </View>


      <View style = {estilos.bloco}>
      
        <Text>Informe a sua Altura: </Text>
        <TextInput style = {estilos.txt}

          autoFocus = {false}

          keyboardtype = {'numeric'}

          value = {altura}

          onChangeText = {text => setAltura(text)}

        />
      
      </View>


      <View style = {estilos.bloco}>
      
        <TouchableHighlight 
        style = {estilos.btnCalc} 
        onPress = {() => calcIMC()}>
        
          <Text style = {estilos.txtbtn}>Calcular IMC</Text>

        </TouchableHighlight>
      
      </View>


      <View style = {estilos.bloco}>
        
          <Text>Resultado: {resultado}</Text>
      
      </View>

    </SafeAreaView>

  )

}




const estilos = StyleSheet.create({

  body:{
    margin: 10
  },

  bloco:{
    marginBottom: 20
  },

  txt:{
    width: '100%',
    borderWidth: 1,
    borderColor: 'blcak',
    padding: 10,
    borderRadius: 10
  },

  btnCalc:{
    backgroundColor: '#048',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    padding: 10
  },

  txtbtn:{
    fontSize:15,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff'
  }

})



