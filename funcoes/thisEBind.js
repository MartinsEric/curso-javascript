const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() // resultara em 'undefined', pois o this dentro da funcao falar, nao referencia o objeto pessoa.

const falarPessoa = pessoa.falar.bind(pessoa)

falarPessoa()