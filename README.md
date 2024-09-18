# SEVN Esportes

#### Visão Geral

Bem vindo ao SEVN Esportes, aplicativo de consulta do placar dos jogos fictícios do Brasileirão! Suas funcionalidades incluem:

- Consulta de todas as rodadas que aconteceram
- Visualização do placar dos jogos

---

#### Tecnologias

- Vite
- Javascript
- HTML/CSS

---

#### Páginas

- index: Página central do aplicativo

---

#### Scripts

- gamesList.js: Executa a função renderGames que renderiza os jogos rodada por rodada
- roundCard.js: Executa a função renderCard que renderiza o Card principal do aplicativo
- toggleRounds.js: Executa a função handleRounds que controla a mudança de rodadas no Card

#### Services

- sevnApi.js: Executa serviço de requisição da API

#### Utils

- dictionary.js: Dicionário de cores que pinta os escudos de cada time

---

#### Como Rodar o Projeto (local)

- git clone https://www.github.com/dezoliveira/sevn-esportes
- npm install
- npm run dev