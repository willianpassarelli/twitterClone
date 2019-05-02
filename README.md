# twitterClone
> twitterClone construido com ReactJS(frontend) e NodeJS(backend)

### BACKEND
Para mais informações de como rodar o backend deste projeto, tenho uma API em meu repositório no qual tem a explicação de cada detalhe.
Segue abaixo o link do repo:

> [https://github.com/willianpassarelli/API-NodeJS](https://github.com/willianpassarelli/API-NodeJS)

### FRONTEND

## Instalação
```
$ git clone https://github.com/willianpassarelli/twitterClone.git
```

## Telas da Aplicação

![image](https://user-images.githubusercontent.com/26445991/57094103-0e515580-6ce6-11e9-8a10-3429794812ed.png)

![image](https://user-images.githubusercontent.com/26445991/57094047-e06c1100-6ce5-11e9-8003-1ca6710d0d94.png)


## Exemplo de uso

Projeto Web com ReacJS simples, basta inserir o nome de usuário para acessar a pagina de comentários,
ao exibir a pagina basta inserir seu comentário e com apenas a tecla "Enter" o mesmo será enviado, os comentários podem também receber likes.

## Configuração de desenvolvimento

Caso o backend esteja rodando em alguma porta diferente da "3000" fazer alteração no seguinte caminho abaixo. <br>

Path: frontend/services/api.js

```
const api = axios.create({
    baseURL: 'http://localhost:3000'
});
```

## Dependencies

```sh
$ npm install react
$ npm install react-dom
$ npm install react-router-dom
$ npm install socket.io-client
$ npm install axios
```

## Rodando a Aplicação (FRONTEND)

### `npm start`

Executa o aplicativo no modo de desenvolvimento. <br>
Será aberto [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.
