//criando metodos que não existem em string e array usando herança

String.prototype.reverse = function(){
    return this.split('').reverse().join('') //transforma string numa array, usa o metodo reverse do array e junta tudo como uma string
}

console.log('Eric Martins'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())