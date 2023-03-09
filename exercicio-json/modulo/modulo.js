/*
 * Objetivo: Realizar as tarefas com base no repassado 
 * Data: 03/03/2023
 * Autor: Nicole
 * Versão: 1.0
 */
// exportando a variavel 
var estadosBrasil = require('./estados_cidades')
const { estadosCidades } = require('./estados_cidades')

const estadoCidade = estadosBrasil.estadosCidades.estados


const getListaDeEstados = function (json) {
    // entrada
    const estadosJSON = json.slice()
    const listEstadosJSON = {}
    const ufEstados = []
    let status

    // processamento
    if (estadosJSON != undefined) {
        estadosJSON.forEach(function (siglaEstados) {
            ufEstados.push(siglaEstados.sigla)
            listEstadosJSON.UF = ufEstados
            listEstadosJSON.quantidade = ufEstados.length
        })
        status = true
    } else {
        status = false
    }

    // saida
    if (status) {
        console.log(listEstadosJSON)
        return listEstadosJSON
    } else {
        return false
    }

}

const getDadosEstado = function (json, filtro) {
    const uf = filtro
    const estadosJSON = json.slice()
    const dadosEstado = {}
    let status

    if (uf != undefined) {
        estadosJSON.forEach(function (estadosDados) {
            if (estadosDados.sigla == uf) {
                dadosEstado.uf = estadosDados.sigla
                dadosEstado.descricao = estadosDados.nome
                dadosEstado.capital = estadosDados.capital
                dadosEstado.regiao = estadosDados.regiao

            }
        })

        status = true

    } else {
        status = false
    }

    if (status) {
        console.log(dadosEstado)
        return dadosEstado
    } else {
        console.log('error')
        return false
    }

}

const getCapitalEstado = function (json, filtro) {
    const uf = filtro
    const estadosJSON = json.slice()
    const dadosEstadoCapital = {}
    let status

    if (uf != undefined) {
        estadosJSON.forEach(function (dadosCapital) {
            if (dadosCapital.sigla == uf) {
                dadosEstadoCapital.uf = dadosCapital.sigla
                dadosEstadoCapital.descricao = dadosCapital.nome
                dadosEstadoCapital.capital = dadosCapital.capital
            }
        })
        status = true

    } else {
        status = false
    }

    if (status) {

        return dadosEstadoCapital
    } else {
        console.log('error')
        return false
    }

}

const getEstadosRegiao = function (json, filtro) {
    const filtroRegiao = filtro
    const estadosJSON = json.slice()
    const dadosEstadoCapital = {}
    const estado = []

    let status

    estadosJSON.forEach(function (dadosRegiao) {

        if (dadosRegiao.regiao == filtroRegiao) {
            dadosEstadoCapital.regiao = dadosRegiao.regiao

            dadosEstadoCapital.estados = estado

            const estadosDesUf = {}
            // cria um id diferente para casa json com UF e descrição
            estadosDesUf.uf = dadosRegiao.sigla
            estadosDesUf.descricao = dadosRegiao.nome

            estado.push(estadosDesUf)

        }
    })
    console.log(dadosEstadoCapital)
}

const getCapitalPais = function (json) {
    const estadosJSON = json.slice()
}

const getCidades = function (json, filtro) {

}

// getListaDeEstados(estadoCidade)
// getDadosEstado(estadoCidade, 'RJ')
// getCapitalEstado(estadoCidade, 'AC')
getEstadosRegiao(estadoCidade, 'Sul')
