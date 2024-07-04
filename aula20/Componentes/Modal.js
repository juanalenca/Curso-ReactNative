import React, {useState} from 'react'
import {View, Text, Button, Modal, StyleSheet} from 'react-native'
//Modal é um componenete capaz de apresentar um conteúdo acima da view



export default function(){

    const [visivel, setvisivel] = useState(true)

    return(

      <View>
      
        <Modal animationType = "fade" transparent = {true} visible = {visivel} style = {{}}>
        
          <View style = {estilos.modal}>

            <Text>Curso em Vídeo</Text>
            <Text>Curso de React-Native</Text>

            <Button

              title = "Fechar Modal"

              onPress = {() => {
                setvisivel(false)
              }}

            />

          </View>

        </Modal>

        <Button

              title = "Mostrar Modal"

              onPress = {() => {
                setvisivel(true)
              }}

            />  
      
      </View>

    )

}


const estilos = StyleSheet.create({

  modal:{
    backgroundColor: "gray",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alevation: 10
  }

})


