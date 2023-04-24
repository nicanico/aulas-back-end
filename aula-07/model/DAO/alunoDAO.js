/*
 * Objetivo: responsavel pela manipulação de dados dos alunos no banco
 * Data: 14/04/2023
 * Autora: Nicole Souza Santos
 * Versão: 1.0
 */



// inserir dados do aluno no banco de dados
const insertAluno = function(dadosAluno){

}

// Atualizar dados do aluno no banco de dados
const updateAluno = function(dadosAluno){

}

// Deletar dados do aluno no banco de dados
const deleteAluno = function(id){

}

// retornar todos os alunos 
const selectallAlunos = async function(){
    // import da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client')

    // instancia da classe prisma client
    let prisma = new PrismaClient()

    // linguagem de programação do banco de dados - scriptSQL para buscar todos os itens do BD
    let sql = 'select * from tbl_aluno'

    // métodos que executam escripts dentro do banco de dados
    // $queryRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL, uma melhor forma pois assim podemos debugar o código de forma mais pratica
    // $queryRaw('select * from tbl_aluno') - executa diretamente o scriptSQL no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)
    
    // rs == result set conjunto de resultados/linhas do banco

    // valida se o banco de dados retornou algum registro 
    if(rsAluno.length > 0)
        return rsAluno
    else 
        return false
}

// retornar dados do aluno filtrando pelo id
const selectByIdAluno = function(id){

}

const selectByNameAluno = async function(name){

    let { PrismaClient } = require('@prisma/client')

    let prisma = new PrismaClient()
    
    let sql = `select * from tbl_aluno where nome like '%${name}%'`

    let rsNomeAluno = await prisma.$queryRawUnsafe(sql)
    console.log(rsNomeAluno)

    if(rsNomeAluno.length > 0)
        return rsNomeAluno
    else 
        return false

        
}

module.exports = {
    selectallAlunos,
    selectByIdAluno,
    selectByNameAluno
}

