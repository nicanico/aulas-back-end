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

const ERROR_INVALID_ID = {
    status: 400,
    message: 'O ID informado na requisição não é valido ou não foi encaminhado'
}

const ERROR_INVALID_CONTENT_TYPE = {
    status: 415,
    message: 'O tipo de mídia Contet-Type da solicitação não é compativel com o servidor. Tipo aceito: [application/json]'
}

/* Mensagens de SUCESSO */
const SUCESS_CREATED_ITEM = {
    status: 201,
    message: 'Item criado com sucesso'
}

const SUCESS_UPDATE_ITEM = {
    status: 200,
    message: 'Item atualizado com sucesso'
}

const SUCESS_USER_DELETION = {
    status: 200,
    message: 'Item deletado com sucesso'
}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    SUCESS_UPDATE_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    SUCESS_USER_DELETION
}