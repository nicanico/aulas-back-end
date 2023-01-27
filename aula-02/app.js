/* 
    objetivo: Calcular a media de 4 notas escolares
    Autor: Nicole
    Data: 24/01/2023
    Versão: 1.0
*/ 

var readline = require('readline')

// criamos o objeto para ser especialista em entrada de dados no tecalado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// na maioria das vezes teremos que criar um argumento para receber a função de callback
// callback para entrar nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome){
    
    // recebe o valor digitado pelo teclado, o nomeAluno tem escopo local
    let nomeAluno = nome

    // callback para entrada de nota1
    entradaDados.question('Digite a nota1: \n', function(nota1){
        let valor1 = nota1
        
        // callback para entrada de nota2
        entradaDados.question('Digite a nota2: \n', function(nota2){
            let valor2 = nota2

                    // callback para entrada de nota3
            entradaDados.question('Digite a nota3: \n', function(nota3){
                let valor3 = nota3 

                        // callback para entrada de nota4
                entradaDados.question('Digite a nota4: \n', function(nota4){
                    let valor4 = nota4
                    let media
                    
                    /*  Conversão de tipo de dados
                            parseInt() ou Number.parseInt converte string em inteiro
                            parseFloat() ou Number.parseFloat converte uma string em real
                            Number() converte uma string para número, conformea entrada do valor, ele define se será real ou inteiro
                        
                        Operadores de comparação
                            == (verifica a igualdade entre conteudos)
                            != (verifica a diferença entre conteudos)
                            !== (conteudos diferentes mas tipos de dados iguais)
                            ==! (verifica a igualdade entre conteudos e a diferença de tipo de dados)
                            === (verifica igualdade entre conteudos e tipo de dados)
                                Ex: 
                                0 === 0 V
                                '0' === 0 F
                                0 === '0' F
                                0 === 0.0 F
                                0 == 0 V
                                0 == '0' V
                                '0' == 0 V
                            < (menor)
                            > (maior)
                            <= (menor ou igual)
                            >= (maior ou igual)
                        Operadores lógicos
                    */
                   // validação para entrada vazia 
                    if(valor1 == '' || valor2 == ''|| valor3 == '' || valor4 == ''){
                        console.log('ERRO: Você deixou entradas vazias')
                    // validação de numeros
                    } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        console.log('ERRO: Você não digitou números valido')
                    }else{
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4
                        console.log(media)
                    }
                    
                    
                })
            })
        })
    })
})



