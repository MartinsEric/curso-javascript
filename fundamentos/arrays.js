const valores = [5, 7, 9, 3, 10]

console.log(valores[0], valores[3])
console.log(valores[5]) //retornará undefined pq nao existe posiçao 5.

valores[5] = 6
console.log(valores[5]) //o JS permite que o array tenha seu tamanho alterado.

valores.push(2.2, 5.4, 'teste', true) //o push insere novos elementos no fim do array.
console.log(valores)

valores.pop() //remove o ultimo elemento do array e retorna o mesmo.
console.log(valores)

delete valores[4] //deleta o valor de acordo com o indice passado como parametro.
console.log(valores)

console.log(valores.length) //retorna o tamanho do array.