<h1 align="center">Recipes App</h1>

<h3 align="center" >
  Para conferir a aplicação em funcionamento, <a href="https://main-group-3--frabjous-cactus-64ff07.netlify.app/">clique aqui</a>.
</h3>
<div style="width: 1024px">
  <div style="display: flex" align="center">
    <img src="https://github.com/fumagallilaura/recipes-app/blob/main-group-3/ezgif.com-gif-maker.gif?raw=true" alt="Gif da aplicação" width="350" height="600px">
  </div>
</div>

> Recipes App é uma aplicação web responsiva onde o usuário pode pesquisar receitas e drinks, iniciar uma receita ou drink, favoritar, compartilhar o link com os amigos e até ver um vídeo demonstrativo de como fazer a receita.
### ⚙️ Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Migrar os testes unitários e de usabilidade para Jest e RTL. Atualmente eles utilizam o Cypress;
- [ ] Corrigir alguns testes que não estão mais passando devido a algumas alterações durante a estilização do projeto;
- [ ] Adicionar testes para novas funcionalidades implementadas;
- [ ] Corrigir alguns bugs de responsividade;
- [ ] Adicionar animações de loading;
- [ ] Mudar endpoint da tela de ingredientes para usar imagens de maior resolução;

## 🛠️ Tecnologias utilizadas

* React
* React Hooks
* Context API
* Javascript
* Styled Components
* Jest
* RTL
* Cypress

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do `node.js`
* Para melhor usabilidade, certifique-se de utilizar o navegador `Google Chrome`.

## 🚀 Clonando o projeto
Abra um terminal e digite os seguintes comandos:
```
git clone https://github.com/Matta-012/recipes-app.git
cd recipes-app
npm install
npm start
```

## 📫 Contribuindo para o projeto Recipes App

Para contribuir com Chef Pedia, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`
3. Adicione suas alterações ao _stage_ do git: `git add .`
4. Faça o commit das suas alterações: `git commit -m '<mensagem_commit>'`
5. Envie para o branch original: `git push origin <nome-da-sua-branch>`
6. Crie um Pull Request.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/lelec0" target="_blank" rel="noopener noreferrer">
        <img src="https://avatars.githubusercontent.com/u/19829761?v=4" width="100px;" alt="Foto do Max"/><br>
        <sub>
          <b>Max - Dev</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JulianeMarques" target="_blank" rel="noopener noreferrer">
        <img src="https://avatars.githubusercontent.com/u/82173605?v=4" width="100px;" alt="Foto da Juliane Marques no GitHub"/><br>
        <sub>
          <b>Juliane Marques - Dev</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fumagallilaura" target="_blank" rel="noopener noreferrer">
        <img src="https://media-exp2.licdn.com/dms/image/C5603AQEZM6k65BGMKA/profile-displayphoto-shrink_800_800/0/1630885105577?e=1661385600&v=beta&t=VvCkb4wDqX5_bjjrsEHXoDqlOUNcyzDGuP4IMwpMOkw" width="100px;" alt="Foto da Laura Fumagalli"/><br>
        <sub>
          <b>Laura Fumagalli - Dev</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Veidz" target="_blank" rel="noopener noreferrer">
        <img src="https://media-exp2.licdn.com/dms/image/C4D03AQHDnxeVX8l-zg/profile-displayphoto-shrink_800_800/0/1629390206290?e=1661385600&v=beta&t=op4s9l81Vkf2PI4ppkLjRUbQJuNbkxKY55WPGIx5cSk" width="100px;" alt="Foto do Joao Victor Veidz"/><br>
        <sub>
          <b>João Victor Veidz - Dev</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto foi desenvolvido durante o curso de formação web fullstack da [Trybe](https://www.betrybe.com/), sendo o último projeto do módulo de frontend, colocando em prática todos os conhecimentos aprendidos desde o início do curso. Sendo assim, este projeto não está licenciado e não possui fins lucrativos, sendo feito apenas para fins de estudo dos colaborares.

[⬆ Voltar ao topo](#chef-pedia)<br>

---
  
  <details>
    <summary>Tela de Login</summary>

    <!-- - [Tela de login](#tela-de-login) -->
    - A pessoa deve conseguir escrever seu email no input de email;
    - A pessoa deve conseguir escrever sua senha no input de senha;
    - O formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos;
    - 2 tokens são salvos no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken;
    - O e-mail da pessoa usuária é salvo no localStorage na chave user após a submissão;
    - A pessoa usuária é redirecionada para a tela principal de receitas de comidas após a submissão e validação com sucesso do login.
  </details>

  <details>
    <summary>Header</summary>

    - Existe um ícone para a tela de perfil, um título e um ícone para a busca;
    - A pessoa usuária é redirecionada para a tela de perfil ao clicar no botão de perfil;
    - O botão de busca, ao ser clicado, a barra de busca aparece. O mesmo serve para escondê-la.
  </details>

  <details>
    <summary>Barra de busca</summary>

    <!-- - [Barra de busca - Header](#barra-de-busca---header) -->
    - A barra é posicionada logo abaixo do header e foram implementados 3 radio buttons: Ingrediente, Nome e Primeira letra;
    - A busca é feita na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas;
    - Caso apenas uma receita seja encontrada, a pessoa é redirecionada para a tela de detalhes da receita, com o ID da mesma na URL;
    - As receitas são mostradas em cards caso mais de uma receita seja encontrada;
    - Um `alert` é exibido caso nenhuma receita seja encontrada.
  </details>

  <details>
    <summary>Menu inferior</summary>

    - O menu inferior é posicionado de forma fixa e apresenta 3 ícones: um para comidas, um para bebidas e outro para exploração;
    - O menu inferior é exibido apenas nas telas indicadas pelo protótipo;
    - A pessoa usuária é redirecionada para uma lista de cocktails ao clicar no ícone de bebidas;
    - A pessoa usuária é redirecionada para a tela de explorar ao clicar no ícone de exploração;
    - A pessoa usuária é redirecionada para uma lista de comidas ao clicar no ícone de comidas.
  </details>

  <details>
    <summary>Tela principal de receitas</summary>

    - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card
    - Implemente os botões de categoria para serem utilizados como filtro
    - Implemente o filtro das receitas através da API ao clicar no filtro de categoria
    - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro
    - Implemente o filtro de categoria para que apenas um seja selecionado por vez
    - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias
    - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL
  </details>

  <details>
    <summary>Tela de detalhes de uma receita</summary>

    - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL
    - Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações
    - Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa
    - Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`
    - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
    - Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Start Recipe" deve sumir
    - Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"
    - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso
    - Implemente um botão de compartilhar e um de favoritar a receita
    - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer
    - Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário
    - Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa
    - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`
  </details>

  <details>
    <summary>Tela de receita em progresso</summary>

    - Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidades e suas instruções
    - Desenvolva um checkbox para cada item da lista de ingredientes
    - Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista
    - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita
    - Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui
    - Implemente a solução de maneira que o botão de finalizar receita ('Finish Recipe') só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)
    - Redirecione a pessoa usuária após clicar no botão de finalizar receita ('Finish Recipe'), para a página de receitas feitas, cuja rota deve ser `/receitas-feitas`
  </details>

  <details>
    <summary>Tela de receitas feitas</summary>

    - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo
    - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar
    - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
    - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
    - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
    - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita
  </details>

  <details>
    <summary>Tela de receitas favoritas</summary>

    - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo
    - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, um botão de compartilhar e um de "desfavoritar"
    - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
    - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
    - Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela
    - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
    - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita
  </details>

  <details>
    <summary>Tela de explorar</summary>

    - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo
    - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas
    - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas
  </details>

  <details>
    <summary>Tela de explorar bebidas ou comidas</summary>

    - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo
    - Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por nacionalidade e um para pegar uma receita aleatória
    - Redirecione a pessoa usuária ao clicar em "By Ingredient", a rota deve mudar para a tela de explorar por ingredientes
    - Redirecione a pessoa usuária ao clicar em "By Nationality", a rota deve mudar para tela de explorar por nacionalidades
    - Redirecione a pessoa usuária ao clicar em "Surprise me!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API
  </details>

  <details>
    <summary>Tela de explorar ingredientes</summary>

    - Implemente os elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo
    - Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto
    - Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido
  </details>

  <details>
    <summary>Tela de explorar por nacionalidades</summary>

  - Implemente os elementos da tela de explorar por nacionalidades respeitando os atributos descritos no protótipo
  - Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown
  - Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro
  - Implemente a rota que deve ser apenas `/explore/foods/nationalities`
  </details>

  <details>
    <summary>Tela de perfil</summary>

  - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo
  - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
  - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"
  - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas
  - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas
  - Redirecione a pessoa usuária que, ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login
  </details>

