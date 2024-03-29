/*
 * Objetivo: Responsavel pela regra de negocio referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autora: Nicole Souza
 * Versão: 1.0
 */

// nome do arquivo deve ser a mesma da variavel
// import do arquivo DAO para acessar dados do aluno no BD
var alunosDAO = require('../model/DAO/alunoDAO.js')

// import de arquivos de configuração das variaveis, constantes e funções de erro
var message = require('./modulo/config.js')
const { ERROR_INVALID_ID, SUCESS_CREATED_ITEM, ERROR_NOT_FOUND } = require('./modulo/config.js')
const { selectByIdAluno } = require('../model/DAO/alunoDAO.js')


// os controllers são no minimo um para cada tabela
// a controller chama a model/alunoDAO

// controller - nomes em portugues
// model - nomes em inglês

// o front manda os dados da api, o endpoint recebe esses dados para validar e depois mandar pra model


// insere um nnovo aluno
const inserirAluno = async function (dadosAluno) {

    // valida para tratar campos obrigatorios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200

    ) {
        // retorna a mensagem de erro que esta na config
        return message.ERROR_REQUIRED_FIELDS // status code 400
    } else {
        // envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunosDAO.insertAluno(dadosAluno)

        // Valida se o BD inseriu corretamente os dados
        if (resultDadosAluno) {
            // chama a função de pegar o ultimo id criado após o insert
            let novoAluno = await alunosDAO.selectedLastId()

            let dadosAlunosJSON = {}

            dadosAlunosJSON.status = SUCESS_CREATED_ITEM.status
            dadosAlunosJSON.aluno = novoAluno

            return dadosAlunosJSON // status code 201
        } else {
            return message.ERROR_INTERNAL_SERVER // status code 500
        }
    }
}

// atualizar aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200

    ) {
        // retorna a mensagem de erro que esta na config
        return message.ERROR_REQUIRED_FIELDS // status code 400
        // validação de ID incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {
        // adiciona o id do aluno no JSON dos dados
        dadosAluno.id = idAluno

        let statusId = await selectByIdAluno(idAluno)

        if (statusId) {
            let resultDadosAluno = await alunosDAO.updateAluno(dadosAluno)

            if (resultDadosAluno) {
                let dadosAlunosJSON = {}

                dadosAlunosJSON.status = message.SUCESS_UPDATE_ITEM.status
                dadosAlunosJSON.aluno = dadosAluno
                return dadosAlunosJSON
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        } else {
            return message.ERROR_NOT_FOUND
        }



    }

}

// deletar aluno existente
const deletarAluno = async function (id) {

    if (id == '' || id == undefined || isNaN(id)) {
        return message.ERROR_INVALID_ID
    } else {

        let statusId = await selectByIdAluno(id)

        if (statusId) {
            let resultDadosAluno = await alunosDAO.deleteAluno(id)
            
            if (resultDadosAluno)
                return message.SUCESS_USER_DELETION
            else
                return message.ERROR_INTERNAL_SERVER
        } else {
            return ERROR_NOT_FOUND
        }

    }

}


// retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunosJSON = {}

    // chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunosDAO.selectallAlunos()

    if (dadosAluno) {
        // criando um json com o atributo alunos para encaminhar o array de alunos
        dadosAlunosJSON.status = message.SUCESS_REQUEST.status // CASO ESSA LINHA DE VERIFICAÇÃO NÃO EXISTA, DEVEMOS TRATAR O STATUS NO APP
        console.log(message.SUCESS_REQUEST.status)
        dadosAlunosJSON.message = message.SUCESS_REQUEST.message
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }

}

// filtra os alunos pelo id
const getBuscarAlunoId = async function (id) {

    // validação do ID
    if (id == '' || id == undefined || isNaN(id)) {
        return ERROR_INVALID_ID
    } else {
        let dadosAlunosJSON = {}
        // chama a função do arquivo DAO que irá retornar todos os registros do BD
        let dadosAluno = await alunosDAO.selectByIdAluno(id)

        if (dadosAluno) {
            // criando um json com o atributo alunos para encaminhar o array de alunos
            dadosAlunosJSON.status = message.SUCESS_REQUEST.status // CASO ESSA LINHA DE VERIFICAÇÃO NÃO EXISTA, DEVEMOS TRATAR O STATUS NO APP
            console.log()
            dadosAlunosJSON.message = message.SUCESS_REQUEST.message
            dadosAlunosJSON.quantidade = dadosAluno.length
            dadosAlunosJSON.alunos = dadosAluno

            return dadosAlunosJSON
        } else {
            return message.ERROR_NOT_FOUND
        }
    }



    // if(id == '' || id == undefined || id < 1){
    //     return ERROR_INVALID_ID
    // } else {
    //     let resultDadosAluno = await alunosDAO.selectByIdAluno(id)
    //     return resultDadosAluno
    // }

}

// filtra os alunos pelo nome
const getBuscarAlunoNome = async function (nome) {

    let dadosAlunosJSON = {}

    // let alunosDAO = require('../model/DAO/alunoDAO.js')
    if (nome == '' || nome == undefined || nome < 1) {
        return message.ERROR_REQUIRED_FIELDS
    } else {
        let aluno = await alunosDAO.selectByNameAluno(nome)
        if (aluno) {
            console.log(aluno) // antigo dados alunos, erro de nome
            dadosAlunosJSON.quantidade = aluno.length
            dadosAlunosJSON.aluno = aluno
            return dadosAlunosJSON
        } else {
            return false
        }
    }



}

module.exports = {
    getAlunos,
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    getBuscarAlunoId
}