const pai = {nome:  'Ró', corDeCabelo: 'castanho escuro'}

const filha1 = Object.create(pai)
filha1.nome = 'Suellen'
console.log(`${filha1.nome} tem o cabelo ${filha1.corDeCabelo}`)

filha2 = Object.create(pai, {
    nome:{value: 'Karin', writable: false, enumerable: true}
})
console.log(`${filha2.nome} tem o cabelo ${filha2.corDeCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha1){
    console.log(key)
}

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`)
}


