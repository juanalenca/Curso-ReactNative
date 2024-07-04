import React, {useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
//O scrollView é um tipo de view que tem o seu conteúdo rolável, quando o mesmo passa do campo de visão dod celular
//Altomaticamente qualquer elemento que estiver dentro do scrollView vai receber um rolamento


export default function () {
  return(

    <View style = {{flex: 1}}>
    
      <ScrollView style = {{backgroundColor:"#333", padding: 15}}>
      
        <Text style = {{color: "#eee"}}>

            O que é Lorem Ipsum?
            Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou uma prova de tipos e a misturou para fazer um livro de espécimes de tipos. Ela sobreviveu não apenas a cinco séculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.

            Porque usamos isso?
            É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao observar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como modelo de texto padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente (injetando humor e coisas do gênero).


            De onde isso vem?
            Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura latina clássica de 45 aC, com mais de 2.000 anos. Richard McClintock, professor de latim no Hampden-Sydney College, na Virgínia, procurou uma das palavras latinas mais obscuras, consectetur, em uma passagem de Lorem Ipsum, e examinando as citações da palavra na literatura clássica, descobriu a fonte indubitável. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal) de Cícero, escrito em 45 AC. Este livro é um tratado sobre a teoria da ética, muito popular durante o Renascimento. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..", vem de uma linha na seção 1.10.32.

            O pedaço padrão de Lorem Ipsum usado desde 1500 é reproduzido abaixo para os interessados. As seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cícero também são reproduzidas em sua forma original exata, acompanhadas por versões em inglês da tradução de 1914 de H. Rackham.

            A passagem padrão de Lorem Ipsum, usada desde 1500
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            Seção 1.10.32 de "de Finibus Bonorum et Malorum", escrito por Cícero em 45 AC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arquiteto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. , quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex e a comodi consequatur?

        </Text>

      </ScrollView>
    
    </View>

  )
}