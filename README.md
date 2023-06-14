# Documentação do Serviço de Back-End - CRUD de Usuário utilizando TypeORM

## Introdução

Esta documentação fornece informações sobre o serviço de back-end responsável por gerenciar um CRUD (Create, Read, Update, Delete) de usuário utilizando o TypeORM. O projeto consiste em uma aplicação de back-end que oferece endpoints para criar, listar, atualizar e excluir usuários, além de fornecer um endpoint para gerar um token de autenticação.

## Requisitos

Antes de iniciar o projeto, certifique-se de atender aos seguintes requisitos:

-  Node.js (versão 12 ou superior) instalado na máquina.
-  Gerenciador de pacotes Yarn instalado globalmente. Caso não tenha o Yarn, você pode instalá-lo utilizando o seguinte comando:
   ```
   npm install --global yarn
   ```

## Instalação

Siga as etapas abaixo para instalar as dependências do projeto:

1. Faça o clone do repositório do projeto.
2. Navegue até o diretório raiz do projeto no seu terminal.
3. Execute o seguinte comando para instalar as dependências necessárias:
   ```
   yarn install
   ```

## Configuração do Banco de Dados

Antes de executar o projeto, é necessário configurar as variáveis de ambiente no arquivo `.env`. Certifique-se de preencher corretamente as seguintes variáveis:

```
DB_HOST=   # Endereço do servidor do banco de dados (ex: localhost)
DB_USER=   # Nome de usuário do banco de dados
DB_PASSWORD=   # Senha do banco de dados
DB=   # Nome do banco de dados
SECRET_KEY=   # Chave secreta para autenticação
```

## Executando a Aplicação

Para executar a aplicação, siga as etapas abaixo:

### Utilizando Docker

1. Certifique-se de ter o Docker instalado na sua máquina.
2. Navegue até o diretório raiz do projeto no seu terminal.
3. Crie um arquivo `.env` no diretório raiz do projeto e configure as variáveis de ambiente com as informações corretas do seu banco de dados e a chave secreta para autenticação.
4. Execute o seguinte comando para iniciar os containers Docker:
   ```
   docker-compose up --build
   ```
   Observação: A porta utilizada para rodar o Docker é a 5431. Caso haja algum problema com essa porta, você pode alterá-la no arquivo `docker-compose.yml`.

### Utilizando Localhost

1. Certifique-se de ter um banco de dados PostgreSQL configurado na sua máquina local.
2. Navegue até o diretório raiz do projeto no seu terminal.
3. Crie um arquivo `.env` no diretório raiz do projeto e configure as variáveis de ambiente com as informações corretas do seu banco de dados e a chave secreta para autenticação.
4. Execute o seguinte comando para iniciar a aplicação em localhost:
   ```
   yarn dev
   ```

## Testes

A aplicação inclui testes automatizados para validar as regras de negócio. Os testes estão localizados no diretório `src/__tests__`. Dentro deste diretório, os testes de integração estão na subpasta `integration`, enquanto os dados de teste estão na subpasta `mocks`. É importante não alterar nenhum desses arquivos para garantir a integridade dos testes.

Para

executar os testes, siga as etapas abaixo:

1. Certifique-se de estar no diretório raiz do projeto no seu terminal.
2. Execute o seguinte comando para rodar todos os testes:
   ```
   yarn test
   ```
   Para obter um log mais detalhado durante a execução dos testes, você pode usar o seguinte comando:
   ```
   yarn test --all
   ```

Observação: Os testes podem levar alguns segundos para serem concluídos, dependendo do tamanho do teste.

## Endpoints

A seguir estão os endpoints disponíveis no serviço:

### POST /users

Cria um novo usuário com base nos dados fornecidos.

### GET /users

Recupera a lista de todos os usuários registrados.

### PATCH /users/<id>

Atualiza os dados de um usuário específico identificado pelo ID.

### DELETE /users/<id>

Realiza uma exclusão suave (soft delete) de um usuário específico identificado pelo ID.

### POST /login

Gera um token de autenticação para o usuário.

## Considerações Finais

Este documento forneceu uma visão geral e instruções para o projeto de serviço de back-end que gerencia um CRUD de usuário utilizando o TypeORM. Certifique-se de configurar corretamente as variáveis de ambiente e siga as instruções para executar a aplicação de acordo com sua preferência: utilizando Docker ou em localhost.
