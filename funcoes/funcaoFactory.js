function Produto(nome, preco, desconto = 0.05){
    return{
        nome,
        preco,
        desconto,
        imprimirDesconto: () => console.log(`O desconto desse produto é de ${preco * desconto} reais.`)
    }
}

p = new Produto('notebook', 4500)

p.imprimirDesconto()

