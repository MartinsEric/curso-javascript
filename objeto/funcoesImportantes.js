const pessoa = {
    nome: 'Luiza',
    idade: 23,
    peso: 58
}

console.log(Object.keys(pessoa)) //retorna um array com as chaves do objeto passado
console.log(Object.values(pessoa)) //retorna um array com os valores do objeto passado
console.log(Object.entries(pessoa)) //retorna os pares chave e valro dentro de arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}); //o a funcao entries retorna um array, ou seja, podemos manipular o resultado com qualquer funcao de array.


//Object.defineProperty(objeto target, chave, objeto com as propriedades que desejar)
Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, //pode ser listado
    writable: false, //não pode ser alterado
    value: '08/12/1995' //valor
})

console.log(pessoa)

const dest = {a: 1}
const o1 = {b: 2, c: 3}
const o2 = {a: 4}

Object.assign(dest, o1, o2) // adiciona as chaves e valores dos demais argumentos no primeiro argumento, se a chave ja existir, ele sobre escreve

console.log(dest)