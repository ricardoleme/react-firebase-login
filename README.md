# React-Firebase-Login
>

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

O projeto está todo em português, com o objetivo de facilitar o primeiro contato com a tecnologia. :wink:

![](../header.png)

## Instalação
É necessário ter o Node.js e o NPM instalados em seu ambiente.  

Em seguida basta, carregar todas as dependências através do npm:
```sh
npm i
```


## Exemplo de uso

Não esqueça de copiar do Firebase as propriedades de conexão do seu projeto e colocá-las no arquivo firebase.js

```sh
    const firebaseConfig = {
            apiKey: "cole-as-suas-informacoes",
            authDomain: "cole-as-suas-informacoes",
            databaseURL: "cole-as-suas-informacoes",
            projectId: "cole-as-suas-informacoes",
            storageBucket: "cole-as-suas-informacoes",
            messagingSenderId: "cole-as-suas-informacoes",
            appId: "cole-as-suas-informacoes",
            measurementId: "cole-as-suas-informacoes",
};
```

_Para mais especificações, consulte os comentários dentro do próprio código fonte._


## Histórico de lançamentos

* 0.0.1
    * Projeto inicial
    * Adicionado exemplo criando um novo usuário, fazendo o login com o email/senha e com a conta Google e permitindo o usuário receber um email para redefinir a senha.

## Meta

Prof. Ricardo Leme – [@ricardoleme](https://twitter.com/ricardorleme) 

Distribuído sob a licença [MIT](https://opensource.org/licenses/MIT).

[https://github.com/ricardoleme/FatecNodeAPI](https://github.com/ricardoleme/FatecNodeAPI)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/ricardoleme/react-firebase-login/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics

