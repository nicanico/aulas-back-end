/*
Objetivo: Arquivos de funções para calcular uma tabuada 
Data: 06/02/23
Autor: Nicole
Versão: 1.0
*/



const getTabuada = function (multiplicando, maxMultiplicador){
    // função que gera uma tabuada até um contador especifico 
    let tabuada = Number(String(multiplicando).replace(',','.'))
    let tabuadaContador = Number(String(maxMultiplicador).replace(',','.'))
    let status = true
    let resultado
    let contador = 0 // start da repetição

    if(tabuada == 0 || tabuadaContador == 0)
        status = false
    else if (isNaN(tabuada) || isNaN(tabuadaContador))
        status = false
    else{

        for (let contador = 0; contador <= tabuadaContador; contador++) {
            resultado = tabuada * contador
            console.log(`${tabuada} x ${contador} = ${resultado}`)
        }

        // // start e stop
        // while(contador <= tabuadaContador){
        // //2x0=0
        // resultado = tabuada * contador
        // console.log(tabuada, 'x', contador, '=', resultado)
        // contador++
        // // segunda forma de representar: contador = contador + 1
        // // terceira forma: contador +=1 contador reduzido que recebe ele mesmo e mais um
        // }
    }
    return status
}

getTabuada(10,5)

module.exports = {
    getTabuada
}