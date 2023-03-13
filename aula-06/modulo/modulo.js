/*
 * Objetivo: Realizar as tarefas com base no repassado 
 * Data: 03/03/2023
 * Autor: Nicole
 * Versão: 1.0
 */
// exportando a variavel 
var estadosBrasil = require('./estados_cidades.js')
const { estadosCidades } = require('./estados_cidades.js')

const estadoCidade = estadosBrasil.estadosCidades.estados

const getListaDeEstados = function () {
    // entrada
    const estadosJSON = estadoCidade.slice()
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

const getDadosEstado = function (filtro) {
    const uf = filtro.toUpperCase()
    const estadosJSON = estadoCidade.slice()
    const dadosEstado = {}
    let status

    if (uf != undefined) {
        estadosJSON.forEach(function (estadosDados) {
            if (estadosDados.sigla == uf) {
                dadosEstado.uf = estadosDados.sigla
                dadosEstado.descricao = estadosDados.nome
                dadosEstado.capital = estadosDados.capital
                dadosEstado.regiao = estadosDados.regiao
                status = true
            } else {
                return false
            }
        })
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

const getCapitalEstado = function (filtro) {
    const uf = filtro.toUpperCase()
    const estadosJSON = estadoCidade.slice()
    const dadosEstadoCapital = {}
    let status

    if (uf != undefined) {
        estadosJSON.forEach(function (dadosCapital) {
            if (dadosCapital.sigla == uf) {
                dadosEstadoCapital.uf = dadosCapital.sigla
                dadosEstadoCapital.descricao = dadosCapital.nome
                dadosEstadoCapital.capital = dadosCapital.capital
                status = true
            } else {
                return false
            }
        })
        

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

const getEstadosRegiao = function (filtro) {
    const filtroRegiao = filtro
    const estadosJSON = estadoCidade.slice()
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
            status = true

        } else {
            return false
        }
    })

    if (status) {

        return dadosEstadoCapital
    } else {
        return false
    }


}

const getCapitalPais = function () {
    const estadosJSON = estadoCidade.slice()
    const capitaisPais = {}
    const capitais = []
    let status

        estadosJSON.forEach(function (capitaisBrasil) {
            if (capitaisBrasil.capital_pais != undefined) {
                const capital = {}
                capital.capital_atual = capitaisBrasil.capital_pais.capital
                capital.uf = capitaisBrasil.sigla
                capital.descricao = capitaisBrasil.nome
                capital.regiao = capitaisBrasil.regiao
                capital.capital_pais_ano_inicio = capitaisBrasil.capital_pais.ano_inicio
                capital.capital_pais_ano_termino = capitaisBrasil.capital_pais.ano_fim
                capitais.push(capital)
                capitaisPais.capitais = capitais
                status = true
                // console.log(capitaisBrasil.capital_pais.capital)
            } else {
                return false
            }

        })

    if (status) {
    // console.log(capitaisPais)

        return capitaisPais
    } else {
        return false
    }



}

const getCidades = function (filtro) {
    const filtroCidade = filtro.toUpperCase()
    const cidades = estadoCidade.slice()
    const dadosEstadoCapital = {}
    const cidade = []
    let status

    cidades.forEach(function (dadosCidade) {
        if (dadosCidade.sigla == filtroCidade) {
            dadosEstadoCapital.uf = dadosCidade.sigla
            dadosEstadoCapital.descricao = dadosCidade.nome

            dadosCidade.cidades.forEach(function (nomeDasCidades) {
                cidade.push(nomeDasCidades.nome)

                dadosEstadoCapital.quantidade_cidades = cidade.length
                dadosEstadoCapital.cidades = cidade
                status = true
            })
            console.log(dadosEstadoCapital)
            

        } else {
            return false
        }

    })

    if (status) {

        return dadosEstadoCapital
    } else {
        return false
    }


}

// getListaDeEstados(estadoCidade)
// getDadosEstado(estadoCidade, 'RJ')
// getCapitalEstado(estadoCidade, 'AC')
// getEstadosRegiao(estadoCidade, 'Sul')
// getCapitalPais(estadoCidade)
// getCidades(estadoCidade, 'AC')

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}