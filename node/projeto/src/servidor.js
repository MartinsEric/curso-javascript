const porta = 3003
const express = require('express')
const db = require('./bancoDeDados')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está sendo executado na porta ${porta}.`)
})