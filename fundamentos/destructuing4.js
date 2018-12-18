// usando destructuring de array como parametro de uma funcao.

function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] // valida se o min realmente é o menor numero.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([100, 200]))
console.log(rand([, 2000]))
console.log(rand([1050,]))