/*
 * Objetivo: calcular tabuada
 * Autor: Nicole
 * Data: 10/02/23
 * Versão: 1.0
 */

function exibirTabuada(valorInicial, valorFinal, minimo, maximo) {
    let tabuadaInicial = Number(valorInicial)
    let tabuadaFinal = Number(valorFinal)
    let minimoMultiplicador = Number(minimo)
    let maxMultiplicador = Number(maximo)
    let status = true


    while (tabuadaInicial <= tabuadaFinal) {
        console.log(`tabuado do ${tabuadaInicial}`)
        calculoTabuada(minimoMultiplicador, maxMultiplicador, tabuadaInicial)
        tabuadaInicial++
    }

}

function calculoTabuada(minimo, maximo, valorInicial) {
    let tabuadaInicial = Number(valorInicial)
    let minimoMultiplicador = Number(minimo)
    let maxMultiplicador = Number(maximo)

    while (minimoMultiplicador <= maxMultiplicador) {
        resultado = tabuadaInicial * minimoMultiplicador
        console.log(tabuadaInicial, 'x', minimoMultiplicador, '=', resultado)
        minimoMultiplicador++
    }
}
// exibir titulo da tabuada inicial
// após isso exibir a tabuada
// assim sucessivamente até a tabuada final
// mudar número do titiulo e mudar multiplicador a cada tabuada

//tabuada(3, 8, 7, 9)

module.exports = {
    exibirTabuada
}
