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

// Import do arquivo no modulo (Funções)
const estadosCidades = require('./modulo/modulo.js')

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

    // EdnPoint para listar todos os estados
    app.get('/v1/senai/estados', cors(), async function(request, response, next){
        
        
        // chama a função que vai listart todos os estados
        let estados = estadosCidades.getListaDeEstados()

        // Tratamento para validar o sucesso da requisição
        if(estados){
            response.status(200)
            response.json(estados)
        } else{
            response.status(500)
        }
        

    })

    // EndPoint: listar os dados do estado filtrando pela sigla do estado
    // dizemos aqui que o nosso filtro é feito pela sigla
    app.get('/v1/senai/estado/sigla/:uf', cors(), async function(request, response, next){

        let statusCode
        let dadosEstado = {}

        // recebe a sigla do estado que será enviada pela URL da requisição
        let siglaEstado = request.params.uf
        // tratamento de erros para entrada incorreta
        if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
            statusCode = 400
            dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'
        } else{
            let estado = estadosCidades.getDadosEstado(siglaEstado)
            
            if(estado){
                statusCode = 200
                dadosEstado = estado
            } else {
                statusCode = 404
            }
        }
        //retorna o codigo e o JSON
        response.status(statusCode)
        response.json(dadosEstado)
    })

    app.get('/v1/senai/estadoCapital/sigla/:uf', cors(), async function(request, response, next){
        let statusCode
        let dadosEstado = {}

        let siglaEstado = request.params.uf

        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
            statusCode = 400
            dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (reigiao) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio e precisa ser caracteres.'
        } else {
            let estadoCapital = estadosCidades.getCapitalEstado(siglaEstado)

            if(estadoCapital){
                statusCode = 200
                dadosEstado = estadoCapital
            } else {
                statusCode = 404
            }
        }
        response.status(statusCode)
        response.json(dadosEstado)
    })

    app.get('/v1/senai/estadoRegiao/:regiao', cors(), async function(request, response, next){
        let statusCode
        let dadosEstado = {}

        let siglaEstado = request.params.regiao

        if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
            statusCode = 400
            dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'
        } else {
            let estadoCapital = estadosCidades.getEstadosRegiao(siglaEstado)
            console.log(estadosCidades.getEstadosRegiao(siglaEstado))
            if(estadoCapital){
                statusCode = 200
                dadosEstado = estadoCapital
            } else {
                statusCode = 404
            }
        }
        response.status(statusCode)
        response.json(dadosEstado)
    })

    app.get('/v1/senai/estadosCapitalPais', cors(), async function(request, response, next){
        let statusCode
        let dadosEstado = {}
        
        let estados = estadosCidades.getCapitalPais()

        if(estados){
            statusCode = 200
            dadosEstado = estados
        } else{
            statusCode = 500
        }
        
    response.status(statusCode)
    response.json(dadosEstado)
    })

    app.get('/v1/senai/estadoCidades/estado/sigla/:uf', cors(), async function(request, response, next){
        let statusCode
        let dadosEstado = {}

        let siglaEstado = request.params.uf

        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
            statusCode = 400
            dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'
        } else {
            let estadoCapital = estadosCidades.getCidades(siglaEstado)

            if(estadoCapital){
                statusCode = 200
                dadosEstado = estadoCapital
            } else {
                statusCode = 404
            }
        }
        response.status(statusCode)
        response.json(dadosEstado)
    })
    app.get('/v2/senai/cidades', cors(), async function(request, response, next){
        
        /*
         *      Existem 2 opções para receber variaveis para filtro
         *      params - que permite receber a variavel na estrutura da URL
         *              criada no endPoint(geralmente utilizado para ID(PK))
         * 
         *      Query - Também conhecido como queryString permite receber 
         *              uma ou muitas variaveis para realizar filtros avançados
         */

        // Para receber via queryString pela web inves de usar o params, nos usamos o query
        // recebe uma variavel ecaminhada via queryString
        let siglaEstado = request.query.uf
        // let cepEstado = request.query.cep
        // let populacaoEstado = request.query.populacao

        let statusCode
        let dadosCidades = {}

        if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
            statusCode = 400
            dadosCidades.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos'
        } else {
            let cidades = estadosCidades.getCidades(siglaEstado)

            if(cidades){
                statusCode = 200
                dadosCidades = cidades
            } else {
                statusCode = 404
            }
        }
        response.status(statusCode)
        response.json(dadosCidades)

        // console.log(siglaEstado)
        // console.log(cepEstado)
        // console.log(populacaoEstado)
    })

    // roda o serviço da API para ficar aguardando requisições
    app.listen(8080, function(){
        console.log('Olá amigo, estou vivo')
    })


    // acesso http://localhost:8080/estados