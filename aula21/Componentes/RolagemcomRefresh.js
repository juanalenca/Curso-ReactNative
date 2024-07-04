import React, {useState} from 'react'
import {View, Text, ScrollView, RefreshControl} from 'react-native'

export default function () {

  const [atualizando, setAtualizando] = useState(false)

  /*
  Quando eu chamar a função "setAtualizando", eu vou definir o "setAtualizando" para true
  e depois de 3 segundos eu vou definí-lo para false. Ou seja, ele vai definir a função 
  "setAtualizando" para true porque ela representa o carregamento do ScrollView, e depois
  de 3 segundos ela passa false para encerrar o carregamento.
  */
  const aoAtualizar = () => {
    setAtualizando(true)
    setTimeout(() => {setAtualizando(false)}, 3000)
  }

  return(

    <View style = {{flex: 1}}>
    
      <ScrollView 
      style = {{backgroundColor:"#333", padding: 15}} 
      refreshControl = {
        <RefreshControl 
          refreshing = {atualizando}
          onRefresh = {aoAtualizar}
        />
      }
      >
      
        <Text style = {{color: "#eee"}}>

O que é Lorem Ipsum?Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou uma prova de tipos e a misturou para fazer um livro de espécimes de tipos. Ela sobreviveu não apenas a cinco séculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.Porque usamos iss É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como modelo de texto padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente (injetando humor e coisas do gênero).De onde isso vem?Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica de 45 aC, com mais de 2.000 anos. Richard McClintock, professor de latim no Hampden-Sydney College, na Virgínia, procurou uma das palavras latinas mais obscuras, consectetur, em uma passagem de Lorem Ipsum, e examinando as citações da palavra na literatura clássica, descobriu a fonte indubitável. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal) de Cícero, escrito em 45 AC. Este livro é um tratado sobre a teoria da ética, muito popular durante o Renascimento. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..", vem de uma linha na seção 1.10.32.O que é Lorem Ipsum?Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou uma prova de tipos e a misturou para fazer um livro de espécimes de tipos. Ela sobreviveu não apenas a cinco séculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.Porque usamos iss É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como modelo de texto padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente (injetando humor e coisas do gênero).De onde isso vem?Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica de 45 aC, com mais de 2.000 anos. Richard McClintock, professor de latim no Hampden-Sydney College, na Virgínia, procurou uma das palavras latinas mais obscuras, consectetur, em uma passagem de Lorem Ipsum, e examinando as citações da palavra na literatura clássica, descobriu a fonte indubitável. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal) de Cícero, escrito em 45 AC. Este livro é um tratado sobre a teoria da ética, muito popular durante o Renascimento. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..", vem de uma linha na seção 1.10.32.

        </Text>

      </ScrollView>
    
    </View>

  )

}