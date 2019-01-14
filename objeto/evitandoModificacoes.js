//Object.preventExtensions -> proibe o objeto de adicionar novos atributos, mas podem ser modificados e/ou excluidos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 4.99,
    tag: 'Promoção'
})

produto.nome = 'salgado'
delete produto.tag
produto.descricao = 'comida'
console.log('É extensível:', Object.isExtensible(produto))
console.log(produto)


//object.seal -> proibe o objeto de adicionar e remover novos atributos, mas podem ser modificados.

const pessoa = {
    nome: 'Luiza',
    idade: 22
}

Object.seal(pessoa)
pessoa.sobrenome = 'Maíra'
pessoa.idade = 23
delete pessoa.nome
console.log('Está selado:', Object.isSealed(pessoa))
console.log(pessoa)


//Object.freeze -> proibe o objeto de qualquer tipo de modificação, ele fica totalmente 'congelado'
