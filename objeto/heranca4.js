function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

console.log(new Aula('JS', 123))
console.log(new Aula('Java', 456))

//simulando o new
function Novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

console.log(Novo(Aula, 'JS', 123))
console.log(Novo(Aula, 'Java', 456))