/*
 * Objetivo: API para integração entre bak e banco de dados (GET, POST, PUT, DELETE)
 * Data: 14/04/2023
 * Autora: Nicole Souza
 * Versão: 1.0
 */

/*
    Instalação do PRISMA no projeto (biblioteca para cnexão com DB)
        npm install prisma --save
        npx prisma
        npx prisma init
        npm install @prisma/client --save


        npx prisma migrate dev ### serve para realizar o sincronismo entre o prisma e o BD
 */

    

// import das libs para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request, response } = require('express')

// define que os dados que irão chegar da requisição será no padrão JSON
const bodyParserJSON = bodyParser.json()

// import do arquivo da controller que irá solicitar a model os dados do BD
let controllerAluno = require('./controller/controller_aluno.js')
let message = require('./controller/modulo/config.js')
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


    // Endpoint: retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){
        

        // recebe os dados da controller do aluno
        let dados = await controllerAluno.getAlunos()

        // valida se existe registros de alunos
        response.status(dados.status)
        response.json(dados)
        // if(dados){
        //     response.json(dados)
        //     response.status(200)
            
        // } else {
        //     response.json()
        //     response.status(500)
        // }

    })

    // Endpoint: retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

        let id = request.params.id

        let resultDadosAluno = await controllerAluno.getBuscarAlunoId(id)
        console.log(resultDadosAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    })

    // Obrigatoriamente devemos ter esses dois endpoints em QUALQUER api criada

    // Endpoint: insere um novo dado 
    app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function(request, response){

        // recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    })

    // Endpoint: atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function(request, response){

        // para pegar contentType da resquest 
        let contentType = request.headers['content-type']

        if(String(contentType).toLowerCase() == 'application/json'){
            // recebe o id do aluno pelo parametro 
            let idAluno = request.params.id
            // recebe os dados do aluno encaminhado no corpo da requisição
            let dadosBody = request.body
            console.log(dadosBody)

            let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno)

            response.status(resultDadosAluno.status)
            response.json(resultDadosAluno)
        } else {
            // validação para receber dados apenas no formato JSON
            response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
            response.json(message.ERROR_INVALID_CONTENT_TYPE)
        }
    })

    // nota: post insere novos dados (insert) e o put atualiza dados já existentes (update)



    // Endpoint: exclui aluno filtrando pelo id
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){
        
        let id = request.params.id

        let resultDadosAluno = await controllerAluno.deletarAluno(id)
        console.log(id)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    })

    // Endpoint: filtra e exibe aluno com base no nome

    app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response, next){

        let controllerAluno = require('./controller/controller_aluno.js')

        let nomeAluno = request.params.nome

        let buscarNome = await controllerAluno.getBuscarAlunoNome(nomeAluno)
        console.log(buscarNome)

        // valida se existe registros de alunos
        if(buscarNome){
            response.json(buscarNome)
            console.log(buscarNome)
            response.status(200)
            
        } else {
            response.json()
            response.status(500)
        }

    })

    app.listen(8080, function(){
        console.log('Servidor vivo!')
    })