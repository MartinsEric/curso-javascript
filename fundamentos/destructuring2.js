const [a] = [10] // atribuindo o valor de um array unitario na variavel 'a'.
console.log(a)

const [n1, n2, n3, , n5, n6 = 2] = [10, 23, 14, 15, 12 ] // extraindo os valores de um array (o valor 15 e pulado pq uma variavel foi pulada).
console.log(n1, n2, n3, n5, n6)
