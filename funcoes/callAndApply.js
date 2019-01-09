function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const carro = {
    preco: 49990,
    desc: 0.20
}

//usando o 'call'
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))//passando os parametros da funcao getPreco como parametro do call.


//usando o 'apply'
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$'])) //passando os parametros da funcao getPreco como parametro do apply.


/*
 *OBS: a diferenca entre as duas funcoes é que o apply recebe os parametros da funcao getPreco por um array.
 */
 
