# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Registro Testes _Login_

Resultado: Após realizar o _login_, a aplicação fornece uma mensagem de Bem-Vindo ao usuário é feito o encaminhamento para tela inicial da aplicação.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/127675409/021e3d39-40a4-4acc-987f-f84c9bd03562)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/100796561/8aae4254-cbc3-400d-b516-752e3a17cb7f)



## Registro Testes Registro de Novo Usuário

Resultado: Após a criação do novo usuário, é feito o encaminhamento para tela inicial da aplicação.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/127675409/0db2b67a-86cb-4c01-8603-29a58dd5f418)

Resultado: Credenciais do usuário armazenadas em uma nova entrada do local storage.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/127675409/cb492843-907e-4afd-ad65-825c01eeee91)

## Registro de Testes Tela Inicial

Resultado: Após a validação do usuário da aplicação é realizado o encaminhamento para tela inicial.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/100796561/aba5be71-2438-47dc-86b9-517de22ec717)



## Registro de Testes Página de Mídia
Resultado: Após o usuário selecionar um filme, é aberto a página de mídia do filme com os dados dele bem como a opção de adicionar o filme a lista.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/100796561/4cb785f0-8c0c-4bb9-b80e-738693923719)


## Registro de Testes Tela de Lista

Resultado: Após adicionar os filmes selecionados na lista desejada, a aplicação mostra os filmes em forma ordenada.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/100796561/c137ea52-af9a-4f63-b7df-80d9931a07fe)


## Teste de Navegabilidade

Objetivo do teste é para averiguar a navegabilidade dos links e garantir que todos estejam corretos e funcionando na medida em que foram pensados. Os testes em questão foram realizados usando uma ferramenta online chamada Datayze (https://datayze.com/site-navigability-analyzer) verificando, inclusive, a indexabilidade do site:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/100796561/c01c8323-136c-4cac-af17-730650bc95d6)

## Teste de Responsividade

Teste de responsividade disponibilizado pelo Google para saber se os visitantes conseguem usar a página com facilidade em dispositivos móveis.
[Link](https://search.google.com/test/mobile-friendly/result?id=GwR-HRcYlai59B6m2DWkYg&hl=pt) para resultados.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-movie-manager/assets/127675409/a799334f-b4e4-45a8-b955-6f8cd717b542)



## Avaliação

Inicialmente, verificamos que os testes correram de forma regular com o que foi proposto pelo grupo. Todavia, posteriormente, notamos que o sistema carece de uma robustez para verificar a validade de endereços de e-mail que são registrados por usuários. Também será objeto de tentativa de melhoria, no campo de validação do usuário quando do registro, o pedido para que o usuário digite a senha cadastrada duas vezes para fins de segurança. No mais, buscaremos aumentar a fluidez das transições e velocidade em geral do sistema.

