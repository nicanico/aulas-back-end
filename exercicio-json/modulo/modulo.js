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
            status = true

        } else {
            status = false
        }
    })

    if (status) {

        return dadosEstadoCapital
    } else {
        return false
    }


}

const getCapitalPais = function (json) {
    const estadosJSON = json.slice()
    const capitaisPais = {}
    const capitais = []

    let status

    if (json != undefined) {
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
                // console.log(capitaisBrasil.capital_pais.capital)
            }

        })

        status = true
    } else {
        status = false
    }

    if (status) {
        // console.log(capitaisPais)

        return capitaisPais
    } else {
        return false
    }



}

const getCidades = function (json, filtro) {
    const filtroCidade = filtro
    const cidades = json.slice()
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
            })
            console.log(dadosEstadoCapital)
            status = true

        } else {
            status = false
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
getCapitalPais(estadoCidade)
// getCidades(estadoCidade, 'AC')
