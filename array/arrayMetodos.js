const jogadores = ['Diego', 'Arrascaeta', 'Gabigol', 'Vitinho', 'Everton Ribeiro']

console.log(jogadores)

//pop() -> Remove o ultimo elemento do array.
jogadores.pop()
console.log(jogadores)

//shift() -> Remove o primeiro elemento do array.
jogadores.shift() 
console.log(jogadores)

//unshift() -> Insere elemento no inicio do array.
jogadores.unshift('Diego') 
console.log(jogadores)

// push() -> Insere elemento no fim do array.
jogadores.push('Everton Ribeiro') 
console.log(jogadores)

//slice() -> Pode adicionar e/ou remover elementos.

//adicionar
jogadores.splice(1, 0, 'Rodrigo Caio') //Na posicao 1, não retira nenhum elemento e adiciona 'Rodrigo Caio'.
console.log(jogadores)

//remover
jogadores.splice(4, 1) //Na posicao 4 remova 1 elemento.
console.log(jogadores)

jogadores.splice(0, 2, 'Diego Alves') //A partir da posicao 0(inclusive) remova 2 elementos e adicione 'Diego Alves'
console.log(jogadores)

const algunsJogadores = jogadores.slice(1) //Pegue os jogadores a partir da posicao 1(inclusive)
console.log(algunsJogadores)

const algunsJogadores2 = jogadores.slice(0, 2) //Pegue os jogadores da posicao 0(inclusive) até a posicao 2(não inclusa)
console.log(algunsJogadores2)

