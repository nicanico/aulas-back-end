/*
 * Objetivo: Calcular média do aluno e exibir dados
 * Autor: Nicole
 * Data: 10/02/23
 * Versão: 1.0
 */

var mediaResultado = require('./modulo/media.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Informe o nome do aluno(a): ', function (nomeAluno) {
    let nomeAlun = nomeAluno

    entradaDados.question('Informe o sexo do aluno(Digite F ou M): ', function (sexoAlun) {
        let generoAlun = sexoAlun.toUpperCase()

        entradaDados.question('Informa nome do professor(a): ', function (nomeProf) {
            let nomeProfessor = nomeProf

            entradaDados.question('informa o sexo do professor (Digite F ou M): ', function (sexoProf) {
                let generoProf = sexoProf.toUpperCase()

                entradaDados.question('informe o nome do curso: ', function (nomeCurso) {
                    let curso = nomeCurso

                    entradaDados.question('informe o nome da disciplica: ', function (nomeDisciplina) {
                        let disciplina = nomeDisciplina

                        entradaDados.question('nota 1: ', function (nota1) {
                            let valor1 = nota1

                            entradaDados.question('nota 2: ', function (nota2) {
                                let valor2 = nota2

                                entradaDados.question('nota 3: ', function (nota3) {
                                    let valor3 = nota3

                                    entradaDados.question('nota 4: ', function (nota4) {
                                        let valor4 = nota4
                                        let resultado

                                        if (
                                            nomeAlun == ''
                                            || generoAlun == ''
                                            || nomeProfessor == ''
                                            || generoProf == ''
                                            || curso == ''
                                            || disciplina == ''
                                            || valor1 == ''
                                            || valor2 == ''
                                            || valor3 == ''
                                            || valor4 == ''
                                        ) {
                                            console.log('Impossivel continuar operação, campos vazios')
                                        } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                                            console.log('Impossivel calcular, os valores não são numeros')
                                            entradaDados.close()
                                        } else if (valor1 > 100 || valor2 > 100 || valor3 > 100 || valor4 > 100) {
                                            console.log('Valor maior que o esperado, por favor digitar número máximo a 100')
                                            entradaDados.close()
                                        } else if (valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0) {
                                            console.log('Número inferir a 0, por favor insira números máximos a 100')
                                            entradaDados.close()
                                        } else if (generoAlun != 'F' || generoAlun != 'M' || generoProf != 'F' || generoProf != 'M') {
                                            console.log('expressão invalida, por favor digite o genero corretamente')
                                        } else {
                                            resultado = mediaResultado.media(nota1, nota2, nota3, nota4)
                                            if (resultado >= 50 && resultado <= 69) {
                                                entradaDados.question('Aluno reprovado, por favor insira nota do exame: ', function (notaExame) {
                                                    let notaDoExame = notaExame

                                                    if (notaDoExame == '') {
                                                        console.log('É necessario a nota do exame para calcular')
                                                        entradaDados.close()
                                                    } else {
                                                        mediaResultado.formExame(nomeAlun, sexoAlun, nomeProf, sexoProf, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, resultado)
                                                        entradaDados.close()
                                                    }
                                                })
                                            } else {
                                                mediaResultado.form(nomeAlun, sexoAlun, nomeProf, sexoProf, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, resultado)
                                                entradaDados.close()
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})