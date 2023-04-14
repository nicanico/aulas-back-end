/*
 * Objetivo: API para integração entre bak e banco de dados (GET, POST, PUT, DELETE)
 * Data: 14/04/2023
 * Autora: Nicole Souza
 * Versão: 1.0
 */


// import das libs para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request, response } = require('express')

// Cria o objeto app conforme a classe do express
const app = express()

// definições de permissçoes do cors
app.use((request, response, next) => {

    // define quem pode ter acesso a api, no caso todos por conta do *
    response.header('Access-Control-Allow-Origin', '*')

    // define quais metodos serão utilizados na API
    // é necessario ter o options para que o put funcione 
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // atribução de permissões ao cors
    app.use(cors())

    next()

})

// CRUD (Create, Read, Update, e Delete)
// todos os arquivos devem ter um crud ou pelo menos todas essas funcionalidades

/*
 * 
 * Objetivo: API de controle de ALUNOS
 * Data: 14/04/2023
 * Autor: Nicole
 * Versão: 1.0
 * 
*/

    // Endpoint: retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async, function(request, response){

    })

    // Endpoint: retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response){

    })

    // Obrigatoriamente devemos ter esses dois endpoints em QUALQUER api criada

    // Endpoint: insere um novo dado 
    app.post('/v1/lion-school/aluno', cors(), async, function(request, response){

    })

    // Endpoint: atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response){

    })

    // nota: post insere novos dados (insert) e o put atualiza dados já existentes (update)



    // Endpoint: exclui aluno filtrando pelo id
    app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request, response){

    })

    app.listen(8080, function(){
        console.log('Servidor vivo!')
    })