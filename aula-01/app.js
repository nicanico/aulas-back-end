// Permite exibir mensagem 
console.log('Testando o Node.js')

// importe da biblioteca que permite entrada de dados pelo teclado, usamos require para importar
var readline = require('readline')

// criamos um objeto ou variavel que vai ser especialista na entrada
// de dados via teclado
// entrada de dados com o input com o process stdin e saida deles com o output
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Callback - função que permite que na própria linha de programação
// seja uma variavel, um processamento, a chamada de um metodo possa acontecer
// um retorno de dados automaticamente, sem precisar sair este processamento

// Após o usuário digitar o contéudo, objeto entradaDados permite
// retornar o conteúdo digitado para ser utilizado.
// o metodo question permite que o retorno seja atraves de uma função de callback, nesse caso nome, criamos ela
// após a virgula
entradaDados.question('Favor digitar o seu nome: \n', function(nome){
    console.log('Bem vindo, ', nome,' ao servidor node.js!')
})
