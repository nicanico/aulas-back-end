/*
 * Objetivo: Realizar as tarefas com base no repassado 
 * Data: 03/03/2023
 * Autor: Nicole
 * Versão: 1.0
 */
// exportando a variavel 
var estadosBrasil = require('./estados_cidades')

const estadoCidade = estadosBrasil.estadosCidades.estados

const getListaDeEstados = function (json) {
    // entrada
    const estadosJSON = json.slice()
    const listEstadosJSON = {}
    const ufEstados = []
    let status
    
    // processamento
    if(estadosJSON != undefined){
        estadosJSON.forEach(function(siglaEstados){
            ufEstados.push(siglaEstados.sigla)
            listEstadosJSON.uf = ufEstados
            listEstadosJSON.quantidade = ufEstados.length
        })
        status = true
    } else {
        status = false
    }

    // saida
    if(status){
        console.log(listEstadosJSON)
        return listEstadosJSON
    } else{
        return false
    }

}

const getDadosEstado = function (json, filtro){
    const uf = filtro
    const estadosJSON = json
    

}

getListaDeEstados(estadoCidade)
// getDadosEstado(estadoCidade, 'SP')
