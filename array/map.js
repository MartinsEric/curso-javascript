const carrinho = [
    '{"nome": "Caderno", "preco": 10.99}',
    '{"nome": "Borracha", "preco": 3.99}',
    '{"nome": "Kit de lapis", "preco": 41.99}'
]

console.log(carrinho.map(x => JSON.parse(x)).map(x => x.preco))