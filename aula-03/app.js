// exercicio de calculadora
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Olá! Bem vindo a calculadora!')

entradaDados.question('Digite o número da operação desejada\n 1-soma\n 2-subtração\n 3-divisão\n 4-multiplicação\n', function(operacaoNumerico){

    let operador = operacaoNumerico
    if(operador > 4){
        console.log('Operação invalida, tente novamente!')
    }else{

    entradaDados.question('Digite o primeiro valor:', function(primeiroVar){
        let valor1 = primeiroVar.replace(',','.')
        entradaDados.question('Digite o segundo valor:', function(segundoVar){
            let valor2 = segundoVar.replace(',','.')
            let resultado
            if(valor1 == '' || valor2 == ''){
                console.log('ERRO: Você deixou entradas vazias')
            }else if(isNaN(valor1) || isNaN(valor2)){ 
                console.log('ERRO: Você não digitou números validos')
            }else if(operador == 1){ 
                resultado = parseFloat(valor1) + parseFloat(valor2)
                console.log(resultado)
            }else if(operador == 2){
                resultado =  parseFloat(valor1) - parseFloat(valor2)
                console.log(resultado)
            }else if(operador == 3){
                resultado = parseFloat(valor1) / parseFloat(valor2)
                console.log(resultado)
            }else if(operador == 4){
                resultado = parseFloat(valor1) * parseFloat(valor2)
                console.log(resultado)
            }
        })
    })
}
})

