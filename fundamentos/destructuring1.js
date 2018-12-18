// novo recurso  do ES2015

const pessoa = {
    nome: 'Luiza',
    idade: 23,
    endereco:{
        logradouro: 'Rua vonlutarios da patria',
        numero: 2525
    }
}

const {nome, idade} = pessoa // extrai os atributos nome e idade do objeto pessoa.
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // extrai os atributos, porem define outros nomes paras as variaveis.
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // sobrenome nao é um atributo de pessoa, entao será Undefined e bemHumorada, 
                                                // apesar de tambem n ser um atributo, teve 'true' como valor default.
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro: l, numero: num}} = pessoa // acessando o objeto endereco dentro do objeto pessoa.
console.log(l, num)