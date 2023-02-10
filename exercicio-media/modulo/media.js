function media(nota1, nota2, nota3, nota4){
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    let status = true
    let resultado

    resultado = (valor1 + valor2 + valor3 + valor4) / 4
    return resultado

}

function exame(notaExame) {
    let notaDoExame = notaExame
    let novoCalc = media.resultado

    resultadoComExame = (notaDoExame + novoCalc) / 4

    // fazer formulario proprio para exame aqui
    
    return resultadoComExame
    
}

function form(nomeAlun, sexoAlun, nomeProfessor, generoProf, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4){
    // fazer formulario usando true para pessoa aprovada e false para pessoa reprovada
}

module.exports = {
    media,
    form,
    exame
}