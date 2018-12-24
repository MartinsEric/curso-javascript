function Pessoa(){
    this.idade = 0

    const self = this // fazendo isso, o self sempre vai representar o this da funcao.

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // se nao quiser usar o truque do self, so eh necessario usar a funcao bind.
}

new Pessoa