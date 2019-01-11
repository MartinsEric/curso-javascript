const sequencia = {
    _valor: 1,
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 2000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 800 //não faz nada, pq 800 não é maior que o valor atual
console.log(sequencia.valor, sequencia.valor)