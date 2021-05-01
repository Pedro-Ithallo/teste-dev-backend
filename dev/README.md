# Test Dev Back-End 

## API REST para gerenciamento de clientes.

---------------------------------------------------------------------------------

### Features da API 
 - Criar um cliente
 - Editar um cliente
 - Obter um cliente específico pelo id
 - Listar clientes
----
## Tecnologias utilizadas:

 - NODE.JS
 - MONGODB
 - DOTENV
 - EXPRESS
 - NODEMON
 - MONGOOSE
 - REST.client (extenção do vs)
---
## Iniciando o Servidor: 
 - Abra a API via terminal e inicie o Server e o Database pelo comando "**npm start**"


----

## Consumindo a API:
#### - **incluindo um usuário:**
em "**route.rest**" inclua os seguintes paramentros (listados abaixo) em "**POST**" e logo após clique em "**Send request**".
- "clientName": "nome"
- "birthDate": "data de aniversário"
- "gender": "genero"
- "helathProblem": "problema de saúde"
- "healthProblemGrade": "gráu do problema" 
- "creationDate": "data de criação" 

#### - **alterando um usuário:**
Em "**GET**"  inclua o id do usuário desejado no final do **"/localhost:3000/clientes/"** e clique em "**Send request**" para fazer a consulta do usuário.

#### - **Excluindo usuário:**
Em "**Delete**"  inclua o id do usuário desejado no final do **"/localhost:3000/clientes/"** e clique em "**Send request**" para deletar o usuário.

#### - **Alterando o registro do usuário:**
Em "**Patch**"  inclua o id do usuário desejado no final do **"/localhost:3000/clientes/"** e clique em "**Send request**" para alterar um ou mais parametros do usuário.
