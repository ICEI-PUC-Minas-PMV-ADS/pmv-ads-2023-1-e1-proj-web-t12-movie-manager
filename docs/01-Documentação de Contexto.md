# Introdução

Bem-vindo ao nosso software de recomendação de filmes! Nosso aplicativo foi desenvolvido para economizar seu tempo e ajudá-lo a encontrar o filme perfeito para assistir com base em suas preferências. Com uma vasta coleção de filmes para escolher, nosso software oferece recomendações de filmes personalizadas de acordo com seus gostos e interesses.

Esteja você a fim de uma comédia romântica, um thriller cheio de suspense ou uma aventura cheia de ação, nosso software pode ajudá-lo a encontrar o filme certo para a hora certa. Nosso recurso de pesquisa permite que você encontre filmes que atendam critérios a sua escolha, como filmes indicados ao Oscar em uma categoria específica. Você também pode filtrar os resultados da pesquisa com base na classificação, ano de lançamento e outros fatores.

Nesta documentação, você encontrará informações detalhadas sobre como usar nosso software, incluindo como navegar na interface, como pesquisar filmes e como receber recomendações personalizadas. Também incluímos informações sobre como nosso mecanismo de recomendação funciona e como personalizar suas configurações para aproveitar ao máximo nosso software.

No geral, nosso software de recomendação de filmes é uma ótima ferramenta para quem deseja encontrar rápida e facilmente o filme perfeito para assistir, poupando tempo para preparar a pipoca. Então sente-se, relaxe e deixe nosso software fazer o trabalho para você!

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

No passado, o consumo de filmes era feito em salas de cinema, locadoras de fitas ou pela televisão, com acesso limitado em casa e dependente da disponibilidade de locadoras e programação de TV. O consumo era geralmente um evento social fora de casa, sem as tecnologias disponíveis atualmente.

No entanto, o streaming revolucionou a forma como as pessoas consomem filmes e séries no mundo atual, proporcionando um acesso inédito a uma grande variedade de conteúdos audiovisuais. Consumir esse tipo de produto se tornou um novo passatempo para a maioria das pessoas. Com a chegada da pandemia, esse consumo aumentou ainda mais, já que as pessoas passaram a ficar mais tempo em casa e procuraram alternativas para se entreter. Assim, o streaming se tornou uma forma de escapismo e conexão com o mundo exterior para muitas pessoas, independentemente da idade.

De acordo com uma pesquisa da MindMiners em parceria com a Toluna e divulgada pela ABRANET, 91% dos brasileiros consomem filmes e séries pelo menos uma vez por semana em plataformas digitais. Entretanto, é importante notar que esse consumo varia entre uma faixa etária média de 18 até 55 anos [^1].

Destarte, diante da vasta oferta de filmes e séries disponíveis nos serviços digitais, tornou-se cada vez mais difícil para o público jovem-adulto médio escolher o que assistir. A fadiga de decisão, causada pela sobrecarga de informações e opções, tem se tornado um problema comum. Por essa razão, tornou-se necessária a criação de ferramentas que facilitem a escolha do que assistir. O objetivo dessa ferramenta é reduzir a carga cognitiva do usuário, proporcionando sugestões personalizadas e listas pré-selecionadas, garantindo que as escolhas sejam mais precisas e agradáveis. Dessa forma, o público pode desfrutar do entretenimento sem ter que gastar tempo e energia em decisões difíceis, tendo uma conexão de filmes e séries a perfis de usuários.

[^1]: https://abrir.link/QbLhf


> **Links Úteis**:
> - [Público-alvo](https://blog.hotmart.com/pt-br/publico-alvo/)
> - [Como definir o público alvo](https://exame.com/pme/5-dicas-essenciais-para-definir-o-publico-alvo-do-seu-negocio/)
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
