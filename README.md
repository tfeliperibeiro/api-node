<h1>API CRUD em Node Js e Firebase</h1>

<p>API CRUD em NodeJS com integração ao banco de dados 
do Firebase, com os seguintes métodos HTTP: GET, POST, PUT e DELETE.</P>

<h2>Tecnologias utilizadas</h2>

* Node Js
* Express
* Cors
* Nodemon
* Insomnia

<h2>Guia</h2>

1. É necessário clonar o repositório com o comando git clone `git@github.com:tfeliperibeiro/api-node.git`
2. Entrar no diretório do projeto com `cd api-node`
3. Rodar o comando `npm install` para instalar as dependências
4. Após isso rodar a aplicação utilizando `npm dev` ou `yarn dev` se você utiliza o yarn

<h2>Arquitetura REST</h2>
<p>Aqui estão algumas configurações de local host na porta 3000:</p>

* Buscar dados - GET: <http://localhost:3000/buscar>
* Atualizar dados - PUT: <http://localhost:3000/atualizar/{inserir-id-aqui}>
* Criar dados - POST: <http://localhost:3000/criar>
* Deletar dados - DELETE: <http://localhost:3000/deletar/{inserir-id-aqui}>

<h2>Testes</h2>

<p>Para fazer os testes você terá que usar o <a href="https://www.postman.com/">Postman</a> ou o <a href="https://insomnia.rest/download">Insomnia</a>
  é só fazer o download.
</p>
