function media(nota1, nota2, nota3, nota4) {
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    let resultado

    resultado = (valor1 + valor2 + valor3 + valor4) / 4
    return resultado

}

function formExame(nomeAlun, sexoAlun, nomeProf, sexoProf, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame, resultado) {

    let nomeAluno = nomeAlun
    let generoAlun = sexoAlun
    let nomeProfessor = nomeProf
    let generoProf = sexoProf
    let curso = nomeCurso
    let disciplina = nomeDisciplina
    let valor1 = nota1
    let valor2 = nota2
    let valor3 = nota3
    let valor4 = nota4

    let notaDoExame = Number(notaExame)
    let novoCalc = Number(resultado)
    let resultadoComExame

    resultadoComExame = (notaDoExame + novoCalc) / 2

    if (resultadoComExame < 60) {
        if (generoProf == 'F' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAluno} foi reprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}
            Média Final do exame: ${resultadoComExame}
            `)
        } else if (generoProf == 'M' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi reprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}< ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}

            `)
        } else if (generoProf == 'M' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAlun} foi reprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}
            `)
        } else if (generoProf == 'F' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi reprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}
            `)
        }
    } else if (resultadoComExame > 60) {
        if (generoProf == 'F' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAlun} foi aprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}
            `)
        } else if (generoProf == 'M' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi aprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}
            `)
        } else if (generoProf == 'M' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAlun} foi aprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}
            `)
        } else if (generoProf == 'F' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi aprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaDoExame}\n
            Média Final: ${novoCalc}\n
            Média Final do exame: ${resultadoComExame}
            `)
        }
    }
}

function form(nomeAlun, sexoAlun, nomeProf, sexoProf, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, resultado) {

    let nomeAluno = nomeAlun
    let generoAlun = sexoAlun.toUpperCase()
    let nomeProfessor = nomeProf
    let generoProf = sexoProf.toUpperCase()
    let curso = nomeCurso
    let disciplina = nomeDisciplina
    let valor1 = nota1
    let valor2 = nota2
    let valor3 = nota3
    let valor4 = nota4
    let mediaFinal = resultado


    if (mediaFinal < 50) {
        if (generoProf == 'F' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAluno} foi reprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        } else if (generoProf == 'M' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi reprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        } else if (generoProf == 'M' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAlun} foi reprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        } else if (generoProf == 'F' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi reprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        }
    } else if (mediaFinal >= 70) {
        if (generoProf == 'F' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAlun} foi aprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        } else if (generoProf == 'M' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi aprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        } else if (generoProf == 'M' && generoAlun == 'F') {
            return console.log(`
            A aluna ${nomeAlun} foi aprovada na ${disciplina}. \n
            Curso: ${curso} \n
            Professor: ${nomeProfessor}\n
            Notas da aluna: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        } else if (generoProf == 'F' && generoAlun == 'M') {
            return console.log(`
            O aluno ${nomeAlun} foi aprovado na ${disciplina}. \n
            Curso: ${curso} \n
            Professora: ${nomeProfessor}\n
            Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n
            Média Final: ${mediaFinal}
            `)
        }
    }
}

module.exports = {
    media,
    form,
    formExame,
}
