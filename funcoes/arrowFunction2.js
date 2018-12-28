function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/*Se fosse usada uma funcao normal, o 'this' dentro do 'setInterval' nao iria se referir
 * ao 'this' de 'Pessoa'.
 * com isso, teriamos que usar a funcao bind ou o truque do self. 
 */