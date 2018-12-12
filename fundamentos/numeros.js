
let peso1 = 1.0
let peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))// retornará true. Apesar de ter casa decimal, o JS entende que é um inteiro pela casa decimal ser zero.

const avaliacao1 = 6.871
const avaliacao2 = 9.871

let total = avaliacao1 * peso1 + avaliacao2 * peso2;
let media = total / (peso1 + peso2)

console.log(media.toFixed(2))// limita o numero de casas decimais
console.log(media.toString(2))// retorna o valor em binario