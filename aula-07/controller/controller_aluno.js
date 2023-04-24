/*
 * Objetivo: Responsavel pela regra de negocio referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autora: Nicole Souza
 * Versão: 1.0
 */

// os controllers são no minimo um para cada tabela
// a controller chama a model/alunoDAO

// controller - nomes em portugues
// model - nomes em inglês

// o front manda os dados da api, o endpoint recebe esses dados para validar e depois mandar pra model


// insere um nnovo aluno
const novoAluno = function (dadosAluno){

}

// atualizar aluno existente
const atualizarAluno = function (dadosAluno){

}

// deletar aluno existente
const deletarAluno = function (id){

}


// retorna a lista de todos os alunos
const getAlunos = async function (){
    
    let dadosAlunosJSON = {}

    // nome do arquivo deve ser a mesma da variavel
    // import do arquivo DAO para acessar dados do aluno no BD
    let alunosDAO = require('../model/DAO/alunoDAO.js')

    // chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunosDAO.selectallAlunos()
    
    if(dadosAluno){
        // criando um json com o atributo alunos para encaminhar o array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

// filtra os alunos pelo id
const getBuscarAlunoId = function (id){

}

// filtra os alunos pelo nome
const getBuscarAlunoNome = async function (nome){


    let dadosAlunosJSON = {}

    let alunosDAO = require('../model/DAO/alunoDAO.js')

    let aluno = await alunosDAO.selectByNameAluno(nome)

    if(dadosAluno){
        console.log(dadosAluno)
        dadosAlunosJSON.quantidade = aluno.length
        dadosAlunosJSON.aluno = aluno

        return dadosAlunosJSON

    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoNome
}