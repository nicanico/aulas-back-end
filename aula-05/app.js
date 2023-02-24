/*
 * Objetivo: Utilizar código  e metodos de Array
 * Data: 24/02/2023
 * Autor: Marcel
 * Versão: 1.0
 */

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'gabinete', 'HD', 'mémoria']

const exibindoDados = function () {
    // [ ] - representa um objeto do tipo array 
    // { } - representa um objeto do tipo JSON
    // ambos os tipos são objetos



    // exibe quantos elementos existem no array
    console.log(listaNomes.length)

    // imprime todods os itens do array
    console.log(listaNomes)

    // imprime elemento especifico do array
    console.log(listaNomes[0])

    // Verifica o tipo do dado dentro do indice
    console.log(typeof (listaNomes[0]))

    // verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes))

    // table - mostra o array em formato de tabela
    console.table(listaNomes)

    // estruturas de repetição

    // while

    console.log('Exemplo com while')
    let contador = 0 // start
    let qtdeItens = listaNomes.length // stop

    while (contador < qtdeItens) {
        console.log(`o nome do aluno é: ${listaNomes[contador]}`)
        contador++
    }

    // for
    console.log('Exemplo com for')

    for (let cont = 0; cont < qtdeItens; cont++)
        console.log(`o nome do aluno é: ${listaNomes[cont]}`)

    // forEach
    // ele é um metodo de um array, não podemos usar ele com JSON
    // devemos verificar o tipo da massa de dados, pois caso necessario será preciso 
    // conveter o json em array
    console.log('Exemplo com forEach')
    // para cada repetição ele vai jogar a variavel no nome, a posição 0 irá para p nome
    // e por assim em diante, usamos ele em formato de callback
    listaNomes.forEach(function (nome) {
        console.log(`o nome do aluno é: ${nome}`)
    })



}

const manipulandoDados = function () {
    //push - adiciona novos itens no final do array
    // ele preserva os elementos anteriores
    listaProdutos.push('Memória')
    listaProdutos.push('Webcam', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    // unshift - adiciona novos itens no inicio do array
    // mudando o indice dos demais
    listaProdutos.unshift('HD', 'Placa mãe', 'SSD')
    console.table(listaProdutos)

    // pop - remove o último item do array
    // ele preserva também os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    // shift - remove o item do inicio do array
    // mudando o indice dos demais
    listaProdutos.shift()
    console.table(listaProdutos)

    // slice - cria uma copia do array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    // indexOf - permite buscar dentro do array um item
    // se o retorno for -1, o item não foi encontrado
    // se o retorno for maior ou igual a 0 ele foi encontrado
    // e retorna o indice
    console.log(listaProdutos.indexOf('Gabinete'))

    // exemplo de utilização do indexOf
    if(listaProdutos.indexOf('PC') >= 0 ){
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado')
    }
}

const removendoDados = function (nomeProduto){
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    // splice - permite apagar um ou mais itens de um array através do indice
    if(indice >= 0){
        // comando de remoção
        listaProdutos.splice(indice, 1)
        // devemos definir a quantidade de itens que queremos acabar
        status = true
    } else {
        status = false
    }

    return status

}

const novoRetorno = function (array, nomeItem){
    // entrada
    let nome = nomeItem
    const novosProdutos = array.slice()
    const indice = novosProdutos.indexOf(nome)
    let status

    // processamento
    if(indice >= 0){
        novosProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    
    // saida
    if(status){
        return novosProdutos
    } else {
        return false
    }
}

// manipulandoDados()
// console.log(removendoDados('Monitor'))
console.table(listaProdutos)
console.log(novoRetorno(listaProdutos, 'Monitor'))