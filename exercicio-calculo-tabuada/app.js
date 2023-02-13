/*
 * Objetivo: calcular tabuada
 * Autor: Nicole
 * Data: 10/02/23
 * Versão: 1.0
 */

var tabuada = require('./modulo/tabuada.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Por favor, escolha a tabuada inicial: ', function (valorInicial) {
    let tabuadaInicial = valorInicial

    entradaDados.question('Escolha a tabuada final: ', function (valorFinal) {
        let tabuadaFinal = valorFinal

        entradaDados.question('Escolha o minimo multilplicador: ', function (minimo) {
            let minimoMultiplicador = minimo

            entradaDados.question('Escolha o maximo multiplicador: ', function (maximo) {
                let maxMultiplicador = maximo
                let resultado

                if (tabuadaInicial == '' || tabuadaFinal == '' || minimoMultiplicador == '' || maxMultiplicador == '') {
                    console.log('Impossivel calcular com campos vazios')
                    entradaDados.close()
                } else if (tabuadaInicial < 2 || tabuadaFinal > 100) {
                    console.log('valores iniciais e finais permitidos apenas de 2 a 100')
                    entradaDados.close()
                } else if (minimoMultiplicador < 1 || maxMultiplicador > 50) {
                    console.log('o minimo multiplicador deve ser acima de 1 e o maximo multiplicador deve ir até o 50')
                    entradaDados.close()
                } else {
                    resultado = tabuada.exibirTabuada(valorInicial, valorFinal, minimo, maximo)
                    entradaDados.close()
                }

            })
        })
    })
})