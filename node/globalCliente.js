require('./global')

console.log(minhaApp.saudacao())

//não mudou de novo pq usei o Object.freeze
minhaApp.nome = 'outro nome'
console.log(minhaApp.nome)