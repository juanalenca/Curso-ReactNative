//Utilizando o componente TextInput parar entrada de dados de texto

import React, {useState} from 'react'
import {View, TextInput, Text,} from 'react-native'



export default function () {

  //Criando um array constante que recebe o useState parar manipular os dados que serão inseridos
  const [nome, setNome] = useState("Nome") 

  return(

    <View>
    
      <Text>Digite seu nome:</Text>

      <TextInput

        style = {{borderWidth:1, borderColor:"#000"}}

        //o value do componente TextInput está agora associado com o a variável useState
        value = {nome}

        //Associando a função que vai fazer a passagem do vlaor digitado parar a conste useState
        //Parar isso, usamos o setNome, para setar
        /*Assim pegamos o text, que é uma propriedade padão do TextInput que contém o texto
        e vamos passá-la como parÂmetro para arrow function.  Daí colocamos esse text no setNome
        parar o setNome colocar o valor de text no State "nome"*/
        onChangeText = {text =>{setNome(text)}}

        //restrige ou adiciona as linhas de text
        //multiline = "true"

        //deixa tudo maiúculo
        //autoCapitalize = "characters"
        //deixa só a primeira letra maiúscula
        autoCapitalize = "words"
      
      />

      <Text>Valor digitado: {nome}</Text>
    
    </View>

  )
}

