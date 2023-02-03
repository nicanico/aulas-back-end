/*
Objetivo: Projeto para realizar calculos matemáticos (somar, subtrair, multiplicar e dividir)
Data: 03/02/23
Autor: Nicole
Versão: 1.0
*/

// import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('valor: \n', function(numero1){
    let valor1 = numero1.replace(',', '.')

    entradaDados.question('valor2: \n', function(numero2){
        let valor2 = numero2.replace(',', '.')

        entradaDados.question('Escolha uma operação matemática: [SOMAR || SUBTRAIR || MULTIPLICAR || DIVIDIR \n', function(tipoCalculo){
            // toUpperCase - converte uma string em maiusculo
            // toLowerCase - converte uma string em minusculo
            let operacao = tipoCalculo.toUpperCase()
            let resultado

            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log('Não é possivel calcular com campos vazios.')
            
            // } else if (typeof(valor1) != 'number')
            // typeof() - identifica o tipo de dados de um elemento
            // O isNaN - identifica o tipo de conteúdo independente do tipo de dados
            } else if(isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: não é possivel calcular se os dados não forem números.')
            }else{

                resultado = matematica.calculadora(valor1, valor1, operacao)
                if(resultado != false)
                    console.log(resultado)
                else
                    entradaDados.close()
            }
        })
    })
})