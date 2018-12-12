const faculdade = 'UVA'

console.log(faculdade.charAt(2))// retorna a letra do indice 2
console.log(faculdade.charCodeAt(1))// retorna o codigo unicode da letra referenciada pelo indice 1
console.log(faculdade.indexOf('U')) // retorna o indice da letra 'U'

console.log(faculdade.substring(1))// retorna a string a partir do indice 1
console.log(faculdade.substring(0, 1))// retorna a string entre o indice 0 e 1 (1 não incluso)

console.log('faculdade '.concat(faculdade).concat('!'))// concatena as strings ( pode ser feito usando o '+')
console.log(faculdade.replace('A', 4))// substitue 'A' por 4

console.log('Eric, Luiza, Fafa'.split(','))