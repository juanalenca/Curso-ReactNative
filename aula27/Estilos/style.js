//vamos utilizar aqui somente estilos
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  texto:{
    color:"violet",
    fontSize: 20
  },
  textoCursos:{
    color:"blue",
    fontSize: 15
  },
  textoTitolo:{
    color: "#f00",
    fontSize: 30
  }, 
  logo:{
    width: 250,
    resizeMode: "contain",
    margin: 25
  }
})