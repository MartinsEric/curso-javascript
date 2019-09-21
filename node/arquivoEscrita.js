const fs = require('fs')

const produto = {
    nome: 'galaxy S10',
    tipo: 'eletrônico',
    preco: 3999.99,
    desconto: 0.1
}

fs.writeFile(__dirname + '/arquivoProdutos.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})