const notas = [6.7, 8.1, 9.9, 6.5]

for(let i in notas){
    console.log(`${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Luiza',
    sobrenome: 'Ribeiro',
    idade: 23,
    peso: 58
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}