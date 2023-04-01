# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Este tópico apresenta um aprofundamento no entendimento da solução a partir do ponto de vista do usuário. Para o desenvolvimento desta fase o grupo se baseou apenas nas experiências dos seus membros. Os resultados estão apresentados em três tópicos: personas, histórias de usuários e requisitos.


## Personas

Personas são personagens que representam os usuários típicos de um produto ou serviço. Eles geralmente são criados com base em dados coletados em pesquisas ou entrevistas com os potenciais usuários reais do produto ou serviço. As informações utilizadas incluem dados demográficos (idade, sexo, educação e renda) e psicográficos (traços de personalidade, valores, interesses e padrões de comportamento). O objetivo é entender as necessidades e preferências de cada tipo de usuário e assim, criar soluções personalizadas que atendam às suas demandas.  No contexto de streaming, as personas são uma ferramenta importante para identificar padrões de consumo e desenvolver estratégias de comunicação mais eficazes para atender as expectativas dos consumidores. Para este trabalho, foram criadas personas ficcionais, ou seja, criadas com base na experiência dos membros do grupo, sem que houvesse coleta de dados. 

+ ### Eduardo Faustino
|<img src="https://user-images.githubusercontent.com/75648729/228602043-f3480c5e-91b6-43e1-a9e2-4efbf5c0ae36.jpg" width="400">   |_44 anos, casado com 2 filhos, mora em um apartamento com a esposa em uma cidade do interior paulista._   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | gerente de banco.
|**Rotina** | Apesar de morar relativamente perto do trabalho, ele opta por ir de carro por questões de comodidade, especialmente por ter que chegar cedo. Desde a juventude, tem interesse em cinema, acompanhando as trajetórias de atores, produtores e diretores. Ele possui uma coleção de DVDs, fitas cassetes, revistas e livros relacionados ao cinema, com diversos conteúdos, como biografias e assuntos técnicos da produção cinematográfica. É um verdadeiro cinéfilo, conhecedor da evolução da sétima arte e atento às mudanças mais recentes da indústria, como a popularização dos serviços de streaming. Na maioria das vezes, ele assiste seus filmes em casa, onde possui uma sala dedicada para esse fim. Nos fins de semana, não perde a oportunidade de ir a uma sala de cinema para assistir a lançamentos tanto do circuito comercial quanto do circuito alternativo
|**Motivações** |Gostaria de organizar seus filmes assistidos nos serviços de streaming e no cinema como outrora organizava sua coleção de DVDs e fitas cassetes vez que a quantidade de opções nos serviços de streaming está dificultando seus metódos de organização.
|**Hobbies** | é sócio de um clube de cinema que promove exibições e debates com convidados especiais.


+ ### Luiza Wolf Klein
|<img src="https://user-images.githubusercontent.com/75648729/228119736-2f37a2d2-79ad-4522-82e2-a263745fb9c0.jpg" width="400">   |_19 anos, solteira, divide um apartamento com colegas da faculdade._   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Estudante universitária do curso  de publicidade e propaganda em período semi-integral. Estagiária em uma grande empresa de bebidas. 
|**Rotina** | Durante a semana, divide o tempo entre as atividades da faculdade e os compromissos do estágio. Por sorte, a faculdade , o trabalho e sua residência são próximos, o que faz com que ela tenha uma rotina relativamente confortável, sem grandes deslocamentos, não sendo essa realidade das amigas que moram junto com ela, que  ficam praticamene fora o dia todo. Essa rotina facilita ela utiliza com frequência os aplicativos Youtube, Netflix,  HBO Max e GloboPlay. Porquanto , que é apaixoanda  por filmes e séries. 
|**Motivações** | Devido assistir muitos filmes e séries sozinha, gostaria de compartilhar com amigos e parentes essa vasta lista assitida. Além, de amar descobrir em primeira mão de lançamentos. Um serviço que permita a criação de listas do conteúdo consumido facilitaria o compartilhamento dos filmes que assiste.
|**Hobbies** | Maratonar filmes e séries, fotografias e malhar. 



## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Eduardo Faustino | Registrar um filme sobre o qual li em uma matéria de uma revista especializada.                 | Lembrar e assistir ao filme oportunamente. |
|Luiza Wolf       | Registrar quais filmes assistiu.                 | Para manter um controle do consumo. |
|Luiza Wolf       | Manter um registro de filmes que possuo interesse em assistir.                 | Para facilitar na hora de programar as sessões da semana.  |
|Eduardo Faustino | Saber informações do filme como o ano, diretor, etc.                 | Para satisfazer a curiosidade e conhecer melhor a obra do diretor.|
|Luiza Wolf       | Saber em qual plataforma de streaming está disponível determinado filme.                 | Para saber onde poderá assistir ao filme.
|Luiza Wolf       | Saber onde será exibido determinado filme.                 | Para se programar para ir à exibição. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário se increva e faça login na aplicação usando seu e-mail e senha| ALTA | 
|RF-002| A aplicação deverá realizar integração com API de filmes| ALTA |
|RF-003| A aplicação deverá apresentar para cada filme consultado a respectiva imagem da capa com título do filme| ALTA |
|RF-004| A aplicação deverá permitir ao usuário consultar os dados do filme (nome do filme, atores, diretores e sinopse)| ALTA |
|RF-005| A aplicação deverá oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um filme específico que será informado na caixa de pesquisa.| ALTA |
|RF-006| A aplicação deve permitir que os usuários criem uma lista de filmes que assistiram| ALTA |
|RF-007| A aplicação deve permitir que os usuários criem uma lista de filmes que desejam assistir| ALTA |
|RF-008| A aplicacação será capaz de emitir um gráfico de radar baseado no genêro dos filmes assistidos| MÉDIA |
|RF-009| Os usuários poderão gerenciar seus perfis na aplicação| MÉDIA |
|RF-010| A aplicação irá se integrar com plataformas de streaming para que os usuários possam saber a disponibilidade dos filmes| BAIXA |
|RF-011| A aplicação irá oferecer recomendações de filmes para os usuários com base no histórico dos filmes cadastrados nas listas.| BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva para rodar em um dispositivos móvel | ALTA | 
|RNF-002| A aplicação deve ser compatível com os principais navegadores web |  ALTA |
|RNF-003| A aplicação deve ser publicada em ambiente acessível na internet (Github) | ALTA | 
|RNF-004| A aplicação deve ser capaz de lidar com um grande número de usuários e dados sem diminuir o desempenho. | ALTA | 
|RNF-005| A aplicação deve ser fácil de manter e atualizar, com código limpo e documentado para que os desenvolvedores possam entender e modificar facilmente o sistema | BAIXA | 
|RNF-006| A aplicação deve ser fácil de usar e navegar, com interfaces claras e intuitivas para permitir que os usuários adicionem, editem e removam filmes de suas listas |  BAIXA | 
|RNF-007| Deve processar requisições do usuário em no máximo 5s |  BAIXA | 




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser elaborado apenas com HTML, CSS e JavaScript |
|04| O projeto deve ser elaborado pelos membros do grupo |



