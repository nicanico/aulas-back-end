/*
 * Objetivo: separar e exibir numeros pares e impares ao usuario
 * Autor: Nicole
 * Data: 10/02/23
 * Versão: 1.0
 */

calculoParEImpar = require('./modulo/impar-par.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Seja bem vindo(a) ao separador de números\n Insira o número inicial: ', function (inicialNumber) {
    let numeroInicial = inicialNumber

    entradaDados.question('Insira número final: ', function (finalNumber) {
        let numeroFinal = finalNumber
        let calcular

        if (numeroInicial == '' || numeroFinal == '') {
            console.log('Você deixou entradas vazias, tente novamente')
            entradaDados.close()
        } else if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
            console.log('A entrada não é um número, tente novamente')
            entradaDados.close()
        } else {
            calcular = calculoParEImpar.exibirNumeros(inicialNumber, finalNumber)
            if(calcular == false){
                console.log('Você inseriu valores de entrada abaixo de 0 e acima de 500 ou inseriu valor final inferior a 100 ou acima de 1000')
            }
            entradaDados.close()
        }
    })
})