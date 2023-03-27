# Introdução

Os avanços da tecnologia, como internet, computação em nuvem e outras têm transformado a maneira como as pessoas vivem e trabalham.

Um consumidor de produtos audiovisuais dispõe hoje de várias fontes de conteúdo que não eram disponíveis em um passado recente. Hoje em dia, plataformas de streaming como Netflix, Amazon Prime Video e Disney+ oferecem um catálogo vasto de filmes e séries. O desenvolvimento das redes de telefonia, redes sem fio dentre outros, permite que estes conteúdos possam ser acessados através de dispositivos móveis.

Nesse contexto, é importante ao consumidor de conteúdos audiovisuais dispor de uma opção que permita acompanhar os filmes e séries vistos para que possa aproveitar com mais eficiência suas experiências.


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

A a criação de uma aplicação web que permita aos usuários criar listas personalizadas de filmes, bem como visualizar seu perfil de visualização, os usuários terão uma solução prática e conveniente para gerenciar suas preferências de filmes. Além disso, a inclusão de informações sobre a localização do filme em serviços de streaming tornará a experiência do usuário ainda mais conveniente e integrada.

A possibilidade de ter uma lista de filmes já assistidos pode, obviamente, ajudar os usuários a lembrar dos filmes que já viram, o que pode ser especialmente útil para aqueles que assistem a muitos filmes ao longo do tempo. Com essa lista, os usuários podem evitar assistir ao mesmo filme duas vezes, economizando tempo e evitando a frustração de descobrir que já assistiram ao filme anteriormente. Além disso, a lista de filmes já assistidos pode ser usada como uma referência para compartilhar opiniões com amigos ou familiares que também assistiram aos mesmos filmes.

Ainda, com uma lista de filmes que desejam assistir, os usuários podem acompanhar os filmes que desejam ver e priorizar quais assistir primeiro. Além disso, a lista pode ser usada para descobrir novos filmes ou para adicionar filmes que foram recomendados por amigos ou familiares.

A aplicação otimizará o tempo dos usuários ao centralizar em uma única plataforma as informações sobre os filmes que desejam assistir e os que já assistiram. Sem a necessidade de acessar diversos serviços de streaming para encontrar informações sobre um filme específico, os usuários podem economizar tempo e energia. A otimização do tempo é uma das principais preocupações dos usuários que procuram serviços de streaming de filmes. De acordo com um estudo publicado pela The Wrap[^1], os usuários gastam em média 18 minutos pesquisando o que assistir antes de selecionar um filme. Isso pode parecer um tempo relativamente curto, mas quando multiplicado pelo número de vezes que os usuários procuram algo para assistir, pode se tornar uma quantidade significativa de tempo perdido.

Dessa forma, há vidências de que as pessoas perdem uma quantidade significativa de tempo procurando o que assistir em serviços de streaming.

Em síntese, considerando a importância, para os fâs de filmes, em organizar o conteúdo assistido e a assistir bem como poderem economizar tempo, a aplicação é justificada.


[^1]: https://www.thewrap.com/netflix-users-browse-for-programming-twice-as-long-as-cable-viewers-study-says/


> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Soluções Disponíveis no Mercado

Diversas são as ferramentas que auxiliam usuários a criarem listas de filmes. Entre elas, destacam-se as seguintes:

-	**IMDb**[^2] - O Internet Movie Database foi criado em 1990 por Col Needham e é uma base de dados online  uma base de dados online que contém informações sobre filmes, programas de TV, elenco, equipes de produção, trilhas sonoras e outros aspectos relacionados à indústria cinematográfica e televisiva. Ele permite que usuários criem listas de filmes que já assistiram ou que desejam assistir, escrevam críticas e classifiquem as produções em uma escala de 1 a 10. 
-	**TMDb**[^3] - Lançado em 2008 e mantido por uma comunidade de voluntários, o TMDb contém informações sobre milhares de filmes e programas de TV, incluindo sinopses, datas de lançamento, elenco, equipes de produção, orçamentos, receitas de bilheteria e classificações de usuários. Usuários podem se cadastrar no TMDb para criar listas de filmes e programas de TV, escrever críticas e classificar as produções em uma escala de 1 a 10. O site também possui recursos avançados, como APIs (interfaces de programação de aplicativos) que permitem que desenvolvedores integrem os dados do TMDb em seus próprios aplicativos e sites.
-	**JustWatch**[^4] - Lançado em 2014, o JustWatch se caracteriza como um serviço de pesquisa e descoberta de streaming que ajuda os usuários a encontrar onde assistir seus filmes e programas de TV favoritos em serviços de streaming. O serviço fornece informações sobre onde um título está disponível para assistir em serviços de streaming e, para além de ajudar os usuários a encontrar onde assistir seus filmes e programas de TV favoritos, o JustWatch também oferece recomendações personalizadas com base nos gostos e preferências dos usuários. Os usuários podem criar listas de filmes e programas de TV que desejam assistir, e o JustWatch enviará notificações quando esses títulos estiverem disponíveis para streaming.  .
-	**Letterboxd**[^5] - Lançada por neozelandeses em 2011, a rede social oferece uma plataforma para os usuários compartilharem suas opiniões e classificações sobre filmes, bem como criarem listas de seus filmes favoritos, assistidos ou a serem assistidos. O site também permite que os usuários sigam amigos e outros usuários com interesses similares e descubram novos filmes. Trata-se de uma comunidade online ativa, com usuários em todo o mundo. Ele fornece recursos para ajudar os usuários a descobrir novos filmes e acompanhar as estreias mais recentes.
-	**Rotten Tomatoes**[^6] - Abrangente e confiável o Rotten Tomatoes é uma plataforma de avaliação de filmes e programas de TV que fornece aos usuários informações úteis e avaliações de especialistas e da comunidade para ajudar na tomada de decisões ao escolher o que assistir. Entre suas funcionalidades, o sistema fornece informações sobre lançamentos futuros, trailers, notícias relacionadas ao cinema e programas de TV. Ademais, usuários podem criar listas pessoais de filmes que assistiram ou desejam assistir e receber recomendações personalizadas com base em suas avaliações e preferências de gênero.

[^2]: https://www.imdb.com/
[^3]: https://www.themoviedb.org/
[^4]: https://www.justwatch.com/
[^5]: https://letterboxd.com/
[^6]: https://www.rottentomatoes.com/ 
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
