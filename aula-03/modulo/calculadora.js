/*
 * Objetico: Arquivo para calculos matemáticos
 * Data: 03/02/2023
 * Autor: Nicole
 * Versão: 1.0
 */

// função para realizar calculos matemáticas [SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR]
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == 'SOMAR')
        resultado = valor1 + valor2
    else if (operacao == 'SUBTRAIR')
        resultado = valor1 - valor2
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2
    else if (operacao == 'DIVIDIR') {
        //validação de tratamento por divisão por 0
        if (valor2 == 0)
            console.log('Não é possível realizar a divisão por 0')
        else
            resultado = valor1 / valor2
    } else {
        console.log('ERRO: A sua escolha de operação matemática foi inválida')
        //finaliza o call back do objeto de entrada de dados (sai do programa)
        entradaDados.close()
    }

    // alternativa de tratamento de erro de resultado invalido sem precisar atribuição
    // de valor a vaiavel resultado
    if (resultado == undefined)
        return false
    else
        return resultado
}

// permite adicionar uma function no escopo global (public)
// As functions que não estiverem aqui no exports, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora
}