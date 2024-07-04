//como é um componenete de classe, importamos o {Component}
import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'


//uma classe que estende o método Componente
//Estado de props em componenete de classe
export default class Carro extends Component {

  //State é um conteiner/objeto com suas propriedades
  state = {
    ligado: true
  }

  //Propriedades da classe
  render(Props){
    
    return(
      
      //parar manipular o estado usamos o this.state
      <View>

        <Text>Carro: {this.props.nome} - Ligado: {this.state.ligado ? "Sim!" : "Não!"}</Text>
        <Button

          title = {this.state.ligado ? "Desligar" : "Ligar"}

          onPress = {
            //vamos alterar o vlaor do state a cada vez que o botão é apertado
            //parar manipular o estado usamos o this.setState({estado:o que o estado va receber})
            //neste caso, vai recebe o seu oposto
            () => {this.setState({ligado:!this.state.ligado})}
          }

        />

      </View>

    )

  }

}





