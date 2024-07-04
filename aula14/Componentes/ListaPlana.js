import React from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'


//cada {} é um item
/*
O FlatList é ficiência de renderização, desempenho de rolagem e flexibilidade de personalização. 
Ele é particularmente útil para listas longas e dinâmicas, como feeds de notícias, 
listas de produtos, conversas em aplicativos de mensagens e muito mais.
*/
const produtos = [
  {
    id:"001",
    descricao:["Mouse", "250.99"]
  },
  {
    id:"002",
    descricao:["Mouse", "450.67"]
  },
  {
    id:"003",
    descricao:["Monitor", "3789.90"]
  },
  {
    id:"004",
    descricao:["Gabinete", "262.67"]
  },
  {
    id:"005",
    descricao:["Memoria Ram", "150.90"]
  },
  {
    id:"006",
    descricao:["Gpu", "3399.90"]
  },
  {
    id:"007",
    descricao:["Placa Mãe", "1745.56"]
  },
  {
    id:"008",
    descricao:["Gpu", "3399.90"]
  },
  {
    id:"009",
    descricao:["Placa Mãe", "1745.56"]
  }
]


export default function (){
  
  return(
    <View>
    
      <FlatList

        //1- informe de onde vêm os dados
        data = {produtos}

        //2- informe a chave (neste caso o id) dos produtos, que são itens 
        //precisamos usar arrow function parar pegar cada id de cada item
        keyExtractor = {item => item.id}  
        
        //3- informe as características dos itens. Como é mais de um item, precisamos usar assim ({})
        //criando uma View para que seja possível ele ganhara estilização de "item", presente na const de estilos
        renderItem = { ({item}) =>  
        <View style={estilos.item}> 

          <Text style={estilos.produto}>
            Descrição: {item.descricao[0]} - Valor: {item.descricao[1]}
          </Text> 

        </View> }
      
      />
    
    </View>
  )

}


const estilos = StyleSheet.create({
  item:{
    backgroundColor: "blue",
    padding: 15,
    marginVertical: 25,
    marginHorizontal: 25
  },
  produto:{
    fontSize: 25
  }
})






