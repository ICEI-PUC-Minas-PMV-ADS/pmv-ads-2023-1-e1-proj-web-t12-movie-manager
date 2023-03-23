# Introdução

Os aplicativos são utilizados nas mais diversas atividades rotineiras, como comunicação, alimentação, transpporte, etc.
O dia-a-dia de muitos trabalhadores e estudantes de grandes cidades brasileiras tem uma coisa em comum: tempo escasso.
Os serviços de streaming, com seu rico catálogo, potencializaram uma opção de lazer que é segura e cabe na agenda mais concorrida.
Entretanto, dada a grande variedade de filmes disponíveis, muitas vezes o usuário se vê perdendo precioso tempo em uma lista interminável de opções.

## Problema

Esse projeto busca resolver o problema de entusiastas de cinema que não têm um histórico de filmes assistidos nem uma lista de filmes que desejam assistir. Sem um registro, pode ser difícil lembrar de todos os filmes que foram assistidos ao longo dos anos e assim perder a oportunidade de compartilhar opiniões e discutir filmes com mais facilidade.

## Objetivos

O objetivo geral deste trabalho é criar uma aplicação web que permita aos usuários gerenciar uma lista de filmes de sua preferência, centralizando em uma única plataforma, um catágolo dos diversos serviços de streaming disponíveis.



Como objetivos específicos temos:
  - Interagir com o catálogo de filmes por meio de notas pessoais, listas de interesses, filmes assistidos e gêneros preferidos.
  - Verificar em qual plataforma de streaming o filme está disponível para assisti-lo. 
  - Diminuir o tempo e fadiga na escolha de qual filme assistir.
  - Facilitar a interação organica de recomendações de filmes de acordo com a definição das preferências usuário, por filmes já assistidos e bem avaliados.
  
  
## Justificativa

Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em certos aspectos do software.

O grupo de trabalho pode fazer uso de questionários, entrevistas e dados estatísticos, que podem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pelo grupo.

> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Soluções Disponíveis no Mercado

Diversas são as ferramentas que auxiliam usuários a criarem listas de filmes. Entre elas, destacam-se as seguintes:

-	**IMDb**[^1] - O Internet Movie Database foi criado em 1990 por Col Needham e é uma base de dados online  uma base de dados online que contém informações sobre filmes, programas de TV, elenco, equipes de produção, trilhas sonoras e outros aspectos relacionados à indústria cinematográfica e televisiva. Ele permite que usuários criem listas de filmes que já assistiram ou que desejam assistir, escrevam críticas e classifiquem as produções em uma escala de 1 a 10. 
-	**TMDb**[^2] - Lançado em 2008 e mantido por uma comunidade de voluntários, o TMDb contém informações sobre milhares de filmes e programas de TV, incluindo sinopses, datas de lançamento, elenco, equipes de produção, orçamentos, receitas de bilheteria e classificações de usuários. Usuários podem se cadastrar no TMDb para criar listas de filmes e programas de TV, escrever críticas e classificar as produções em uma escala de 1 a 10. O site também possui recursos avançados, como APIs (interfaces de programação de aplicativos) que permitem que desenvolvedores integrem os dados do TMDb em seus próprios aplicativos e sites.
-	**JustWatch**[^3] - Lançado em 2014, o JustWatch se caracteriza como um serviço de pesquisa e descoberta de streaming que ajuda os usuários a encontrar onde assistir seus filmes e programas de TV favoritos em serviços de streaming. O serviço fornece informações sobre onde um título está disponível para assistir em serviços de streaming e, para além de ajudar os usuários a encontrar onde assistir seus filmes e programas de TV favoritos, o JustWatch também oferece recomendações personalizadas com base nos gostos e preferências dos usuários. Os usuários podem criar listas de filmes e programas de TV que desejam assistir, e o JustWatch enviará notificações quando esses títulos estiverem disponíveis para streaming.  .
-	**Letterboxd**[^4] - Lançada por neozelandeses em 2011, a rede social oferece uma plataforma para os usuários compartilharem suas opiniões e classificações sobre filmes, bem como criarem listas de seus filmes favoritos, assistidos ou a serem assistidos. O site também permite que os usuários sigam amigos e outros usuários com interesses similares e descubram novos filmes. Trata-se de uma comunidade online ativa, com usuários em todo o mundo. Ele fornece recursos para ajudar os usuários a descobrir novos filmes e acompanhar as estreias mais recentes.
-	**Rotten Tomatoes**[^5] - Abrangente e confiável o Rotten Tomatoes é uma plataforma de avaliação de filmes e programas de TV que fornece aos usuários informações úteis e avaliações de especialistas e da comunidade para ajudar na tomada de decisões ao escolher o que assistir. Entre suas funcionalidades, o sistema fornece informações sobre lançamentos futuros, trailers, notícias relacionadas ao cinema e programas de TV. Ademais, usuários podem criar listas pessoais de filmes que assistiram ou desejam assistir e receber recomendações personalizadas com base em suas avaliações e preferências de gênero.

[^1]: https://www.imdb.com/
[^2]: https://www.themoviedb.org/
[^3]: https://www.justwatch.com/
[^4]: https://letterboxd.com/
[^5]: https://www.rottentomatoes.com/ 


## Público-Alvo

A busca por entretenimento em plataformas digitais se tornou uma parte importante da rotina diária de muitas pessoas, e a pesquisa realizada pela MindMiners em parceria com a Toluna e divulgada pela ABRANET comprova que a demanda por entretenimento audiovisual online é alta no Brasil, sendo que 91% dos brasileiros consomem filmes e séries pelo menos uma vez por semana em plataformas digitais.

No entanto, é importante ressaltar que essa rotina de consumo varia de acordo com a faixa etária média dos usuários. Por exemplo, pessoas entre 18 e 24 anos podem ter uma rotina mais atarefada com estudos, trabalho e outras atividades, mas ainda assim dedicam um tempo para assistir aos seus programas favoritos. Já pessoas entre 45 e 55 anos podem ter uma rotina mais estabelecida com obrigações familiares e profissionais, o que pode afetar o tempo disponível para consumo de filmes e séries.

Nesse contexto, a escolha do que assistir, ter um histórico de filme assistidos ou onde assistir uma série e filme que deseja  tornou-se cada vez mais difícil para o público jovem-adulto médio, devido à sobrecarga de informações e opções, gerando a fadiga de decisão, um problema comum que afeta muitas pessoas. Por isso, é fundamental a criação de uma aplicação que facilite a escolha do que assistir, reduzindo a carga cognitiva do usuário e oferecendo sugestões personalizadas e listas pré-selecionadas, garantindo que as escolhas sejam mais precisas e agradáveis.

Essa aplicação pode conectar as preferências de filmes e séries dos usuários aos seus perfis, oferecendo sugestões com base em seus interesses e histórico de consumo, aumentando a satisfação do usuário e melhorando sua experiência de entretenimento online. Destarte, esse público  entre 18 e 55 anos pode desfrutar do entretenimento disponível nos serviços digitais sem ter que gastar tempo e energia em decisões difíceis.

[^1]: https://abrir.link/QbLhf


> **Links Úteis**:
> - [Público-alvo](https://blog.hotmart.com/pt-br/publico-alvo/)
> - [Como definir o público alvo](https://exame.com/pme/5-dicas-essenciais-para-definir-o-publico-alvo-do-seu-negocio/)
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
