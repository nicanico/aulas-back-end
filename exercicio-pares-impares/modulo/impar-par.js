/*
 * Objetivo: separar e exibir numeros pares e impares ao usuario
 * Autor: Nicole
 * Data: 10/02/23
 * Versão: 1.0
 */

function exibirNumeros(inicialNumber, finalNumber, escolha) {
    let numeroInicial = Number(inicialNumber)
    let numeroFinal = Number(finalNumber)
    let escolhaImparOuPar = escolha
    let tituloPar = 'Lista de números pares'
    let tituloImpar = 'Lista de números impares'

    if(numeroInicial < 0 || numeroInicial > 500 || numeroFinal < 100 || numeroFinal > 1000 || escolhaImparOuPar.toUpperCase() != 'AMBAS' && escolhaImparOuPar.toUpperCase() != 'PARES' && escolhaImparOuPar.toUpperCase() != 'IMPARES'){
        return false
    } else if(numeroInicial == numeroFinal || numeroInicial > numeroFinal){ 
        console.log('Você inseriu entradas e saidas iguais ou o número inicial é maior do que o final, tente novamente!')
    } else {
        if(escolhaImparOuPar.toUpperCase() == 'AMBAS'){
            console.log(tituloPar)
            numerosPares(numeroInicial, numeroFinal)

            console.log(tituloImpar)
            numerosImpares(numeroInicial, numeroFinal)
        } else if(escolhaImparOuPar.toUpperCase() == 'PARES'){
            
            console.log(tituloPar)
            numerosPares(numeroInicial, numeroFinal)
        }else if(escolhaImparOuPar.toUpperCase() == 'IMPARES'){
            
            console.log(tituloImpar)
            numerosImpares(numeroInicial, numeroFinal)
        } 
        
    }
    
}

function numerosImpares(inicialNumber, finalNumber) {
    let numeroInicial = Number(inicialNumber)
    let numeroFinal = Number(finalNumber)
    let listaImpares = new Array()

    while(numeroInicial <= numeroFinal){
        if(numeroInicial % 2 == 1){
            console.log(numeroInicial)
            listaImpares.push(numeroInicial)
        }
        numeroInicial++
    }
    console.log(`Quantidade de números impares: ${listaImpares.length}`)
    
}

function numerosPares(inicialNumber, finalNumber) {
    let numeroInicial = Number(inicialNumber)
    let numeroFinal = Number(finalNumber)
    let listaPares = new Array()
    
    while(numeroInicial <= numeroFinal){
        if(numeroInicial % 2 == 0){
            console.log(numeroInicial)
            listaPares.push(numeroInicial)
        }
        numeroInicial++
    }
    console.log(`Quantidade de números pares: ${listaPares.length}\n`)
    
}

module.exports = {
    exibirNumeros
}

// exibirNumeros(2, 20)