# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Personas são representações  de usuários que frequentam sites e aplicativos de streaming de audiovisual. Elas são criadas a partir de informações coletadas sobre diferentes tipos de usuários, como suas idades, ocupações e comportamentos de consumo. O objetivo é entender as necessidades e preferências de cada tipo de usuário e assim, criar soluções personalizadas que atendam às suas demandas. No contexto de streaming, as personas são uma ferramenta importante para identificar padrões de consumo e desenvolver estratégias de comunicação mais eficazes para atender as expectativas dos consumidores.

+ ### Luiza Wolf Klein

	![Foto representativa](https://user-images.githubusercontent.com/75648729/228119736-2f37a2d2-79ad-4522-82e2-a263745fb9c0.jpg)

	+ **Idade**: 19 anos

	+ **Profissão**:  
	    Estudante universitária do curso  de publicidade e propaganda em período semi-integral. 
	+ **Aplicativos**:  
      Youtube; Netflix;  HBO Max; GloboPlay.

	+ **Motivações**:  
         + Apaixonada por filmes e séries
         + Gostaria de criar listas de filmes  para compartilhar com os amigos e a famíliares

	+ **Dores**:  
         + O tempo disponível para procurar novos conteúdos é limitado.
         +  Gostaria de centralizar suas listas de filmes e série  em um único aplicativo
		
	+ **Hobbies**:  
         + Fotografia 
         + Maratonar filmes e séries 




Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário se increva e faça login na aplicação usando seu e-mail e senha| ALTA | 
|RF-002| Permitir ao usuário redefinir sua senha da aplicação usando seu e-mail| ALTA |
|RF-003| A aplicação deverá realizar integração com API de filmes| ALTA |
|RF-004| A aplicação deverá apresentar para cada filme consultado a respectiva imagem da capa com título do filme| ALTA |
|RF-005| A aplicação deverá permitir ao usuário consultar os dados do filme (nome do filme, atores, diretores e sinopse)| ALTA |
|RF-006| A aplicação deverá oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um filme específico que será informado na caixa de pesquisa.| ALTA |
|RF-007| A aplicação deve permitir que os usuários criem uma lista de filmes que assistiram| ALTA |
|RF-008| A aplicação deve permitir que os usuários criem uma lista de filmes que desejam assistir| ALTA |
|RF-009| A aplicacação será capaz de emitir um gráfico de radar baseado no genêro dos filmes assistidos| MÉDIA |
|RF-010| Os usuários poderão criar seus perfis na aplicação| MÉDIA |
|RF-011| Os usuários poderão gerenciar seus perfis na aplicação| MÉDIA |
|RF-012| Os usuários poderão inserir foto de perfil em suas contas| MÉDIA |
|RF-013| A aplicacação irá se integrar com plataformas de streaming para que os usuários possam saber a disponibilidade dos filmes| BAIXA |
|RF-014| A aplicacação deve permitir a visualização das listas criadas.| BAIXA |
|RF-015| A aplicacação irá oferecer recomendações de filmes para os usuários com base no histórico dos filmes cadastrados nas listas.| BAIXA |


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



