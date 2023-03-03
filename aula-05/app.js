/*
 * Objetivo: Utilizar código  e metodos de Array
 * Data: 24/02/2023
 * Autor: Nicole
 * Versão: 1.0
 */

// [ ] - representa um objeto do tipo array 
// { } - representa um objeto do tipo JSON
// ambos os tipos são objetos

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'gabinete', 'HD', 'mémoria']

/*
 *  JSON é composto por chave(atributo) e valor
    Chave   valor   chave    valor     chave   valor
    {nome: 'Jose', celular: '1197777', email: 'jose@gmail.com'}
 */

const exibindoDados = function () {



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
    if (listaProdutos.indexOf('PC') >= 0) {
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado')
    }
}

const removendoDados = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    // splice - permite apagar um ou mais itens de um array através do indice
    if (indice >= 0) {
        // comando de remoção
        listaProdutos.splice(indice, 1)
        // devemos definir a quantidade de itens que queremos acabar
        status = true
    } else {
        status = false
    }

    return status

}

const novoRetorno = function (array, nomeItem) {
    // entrada
    let nome = nomeItem
    const novosProdutos = array.slice()
    const indice = novosProdutos.indexOf(nome)
    let status

    // processamento
    if (indice >= 0) {
        novosProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    // saida
    if (status) { //status == true
        return novosProdutos
    } else {
        return false
    }
}

const listagemProdutos = function () {
    // a chave produto possui uma coleçao, aqui chamamos a lista de produtos criada
    // la em cima
    // Forma n°1 de criar um json e já atribuir chaves e valores 
    // let listProdutosJSON = {produtos: listaProdutos, clientes: listaNomes}

    // forma n°2 de cirar um json, onde as chaves e valores são atribuídas no decorer do projeto
    // let listProdutosJSON = {}

    // listProdutosJSON.produtos = listaProdutos
    // listProdutosJSON.clientes = listaNomes

    // extraindo valores
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos) // exibe apenas o array
    // console.log(listProdutosJSON.produtos[1]) // pega o elemento escolhido pelo indice
    // console.log(listProdutosJSON.clientes[5])

    let listProdutosJSON = {} 
    let listProdutosArray = [
                {
                    nome: 'Monitor',
                    quantidade: 300,
                    marca: 'Dell',
                    valor: 1000,
                    codigo: 1
                },
                {
                    nome: 'Monitor',
                    quantidade: 380,
                    marca: 'LG',
                    valor: 1300,
                    codigo: 2
                },
                {
                    nome: 'Teclado',
                    quantidade: 800,
                    marca: 'LG',
                    valor: 230,
                    codigo: 3
                },
                {
                    nome: 'Teclado',
                    quantidade: 80,
                    marca: 'logitech',
                    valor: 120,
                    codigo: 4
                },
                {
                    nome: 'Teclado',
                    quantidade: 380,
                    marca: 'Razer',
                    valor: 1230,
                    codigo: 5
                },
                {
                    nome: 'Teclado',
                    quantidade: 380,
                    marca: 'Razer',
                    valor: 1230,
                    codigo: 6
                },
                {
                    nome: 'Mouse',
                    quantidade: 790,
                    marca: 'DELL',
                    valor: 115,
                    codigo: 7
                },
                {
                    nome: 'Mouse',
                    quantidade: 25,
                    marca: 'Razer',
                    valor: 800,
                    codigo: 8
                }
            ]

    // arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']
    
    // arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS']
    let listModelosTeclado = ['Mecanico', 'Semi-Mecanico', 'Membrana', 'óptico']
    
    // adiciona o array de produtos dentro de um json
    listProdutosJSON.produtos = listProdutosArray

    // Adicionar cores ao monitor dell
    // aqui vamos ao inidice 0, apos o .cores ele adiciona um novo atributo
    // colocando o array das coresDell
    listProdutosJSON.produtos[0].cores = listCoresDellArray
    listProdutosJSON.produtos[1].cores = listCoresLgArray

    listProdutosJSON.produtos[2].cores = listCoresTecladoArray
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray

    listProdutosJSON.produtos[6].cores = listCoresDellArray
    listProdutosJSON.produtos[7].cores = listCoresMouseArray

    // Adicionar modelos aos monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor

    // Adicionar modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[3].modelos = listModelosTeclado
    listProdutosJSON.produtos[4].modelos = listModelosTeclado
    listProdutosJSON.produtos[5].modelos = listModelosTeclado



    // relatorio 
    // console.log('Nome: ' + listProdutosJSON.produtos[1].nome)
    // console.log('Marca: ' + listProdutosJSON.produtos[1].marca)
    // console.log('Valor: ' + listProdutosJSON.produtos[1].valor)
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores[1])
    // console.log('Modelo: ' + listProdutosJSON.produtos[1].modelos[1])

    // para cada elemento chamado ele coloca dentro do item
    // tudo que quisermos saber esta dentro do item
    listProdutosJSON.produtos.forEach(function(itemProduto){
        console.log('Nome: ' + itemProduto.nome)
        console.log('marca: ' + itemProduto.marca)
        console.log('valor: ' + itemProduto.valor)

        // tratativa de erro para quando não exitir cores
        if(itemProduto.cores != undefined ){
            itemProduto.cores.forEach(function(cor){
                // percorre  array de cores que esta dentro do array de produtos
                console.log('Cor: ' + cor)
            })
        }

        if(itemProduto.modelos != undefined ){
            // percorre o array de modelos que esta dentro do array de produtos
            itemProduto.modelos.forEach(function(modelo){
                console.log('Modelo: ' + modelo)
            })
            console.log('----------------------')
        }
    })

    

    // console.log(listProdutosJSON.produtos)
}

listagemProdutos()
// manipulandoDados()
// console.log(removendoDados('Monitor'))
// console.table(listaProdutos)
// console.log(novoRetorno(listaProdutos, 'Monitor'))