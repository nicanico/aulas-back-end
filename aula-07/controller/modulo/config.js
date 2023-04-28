/*
Objetivo: arquivo responsavel por padronizar as  mensagens de erro, sucesso, funções, variaveis para o projeto
Data: 28/04/2023
Autor: Nicole S.
Versão: 1.0
*/

/* Mensagens de ERRO */
const ERROR_REQUIRED_FIELDS = {
    status: 400,
    message: 'Campos obrigatorios não foram preenchidos'
}

const ERROR_INTERNAL_SERVER = {
    status: 500,
    message: 'Devido a um erro interno no servidor, não foi possível processar a requisição'
}

/* Mensagens de SUCESSO */
const SUCESS_CREATED_ITEM = {
    status: 201,
    message: 'Item criado com sucesso'
}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}