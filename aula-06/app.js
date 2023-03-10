/**
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Nicole Souza
 * Data: 10/03/2023
 * Versão: 1.0
 */

/**
 * Express - Dependencia para realizar requisições de API pelo procolo HTTP
 *  instalação - npm install express --save 
 * 
 * Demais instalações:
 * Cors - dependencia para gerenciar permissões de requisição da API
 *  npm install cors --save
 * Body-Parser - dependência que gerencia o corpo das requisições
 *  npm install body-parser --save
 */

// import das dependencias do projeto
// dependencia para criar requisições da API
const express = require('express')
// dependencia para grenciar as permissões da API
const cors = require('cors')
// dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser')
const { request } = require('http')
const { response } = require('express')

// cria um objeto com as caracteristicas do express
const app = express()

// metodo que passamos algumas informações e permissões
app.use((request, response, next) => {
    // manipulando header da requisição

    // API publica - fica disponivel para utilização de qualquer aplicação - uso livre - *(sem restrições)
    // API privada - somente o IP informado pode consumir dados da API - no lugar do * colocamos o IP do servidor onde ele só irá responder do ip
    // defini se a API será publica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    // Permite definir quais métodos poderam ser utilizados nas requisições da API
    // o options é usado para uma requisição que chegara dados na API, um retorno/feedback
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Envia para o cors as regras de permissões 
    app.use(cors())

    // faz com que ele passe para o proximo callback para não encerrar o codigo
    next()

})

// EndPoints - requisiçoes
// para cada requisição temos um Endpoint

    // é necessario usar a barra no inicio
    // async - estabelece um status de aguarde
        // Obs: caso ele não seja usado a requisição é perdida, pois o front
        // acha que a API está fora do ar

    // devemos SEMPRE passar esses três parametros
    // request - pede - requisição
    // response - responde

    // EdnPoint ara listar todos os estados
    app.get('/estados', cors(), async function(request, response, next){
        const estadosCidades = require('./modulo/modulo.js')
        let estados = estadosCidades.getListaDeEstados()
        response.status(200)
        response.json(estados)

    })

    app.listen(8080, function(){
        console.log('Olá amigo, estou vivo')
    })


    // acesso http://localhost:8080/estados