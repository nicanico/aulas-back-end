/*
 * Objetivo: responsavel pela manipulação de dados dos alunos no banco
 * Data: 14/04/2023
 * Autora: Nicole Souza Santos
 * Versão: 1.0
 */

// import da biblioteca do prisma client
let { PrismaClient } = require('@prisma/client')

// instancia da classe prisma client
let prisma = new PrismaClient()

// inserir dados do aluno no banco de dados
const insertAluno = async function (dadosAluno){
    
    // nos mandamos apenas um item, sendo assim chegara em formato JSON, 
    // devemos deixar tudo padronizado para fcar facil na hora da manutenção
    // para acessarmos será o nome do objeto e o nome do atributo

    // scrpitSQL para receber dados
    let sql = `insert into tbl_aluno (
                    nome,
                    rg,
                    cpf,
                    data_nascimento, 
                    email
                    ) values (
                    '${dadosAluno.nome}',
                    '${dadosAluno.rg}',
                    '${dadosAluno.cpf}',
                    '${dadosAluno.data_nascimento}',
                    '${dadosAluno.email}'
                    )`

    // o script caso ele não retorne nada, nos usamos o executeRawUnsafe
    //  e para os demamais que temos retorno nos usamos o queryRawUnsafe
    

    // executa o script SQL no banco de dados
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else 
        return false

}

// Atualizar dados do aluno no banco de dados
const updateAluno = function(dadosAluno){

}

// Deletar dados do aluno no banco de dados
const deleteAluno = function(id){

}

// retornar todos os alunos 
const selectallAlunos = async function(){
    

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

    // let { PrismaClient } = require('@prisma/client')

    // let prisma = new PrismaClient()
    
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
    selectByNameAluno,
    insertAluno
}

