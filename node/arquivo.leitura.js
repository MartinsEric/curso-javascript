const fs = require('fs')

caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//async
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) 
})

//pode-se já trazer o json convertido em obj usando o require
const config = require('./arquivo.json')
console.log(config)

//lendo pastas...
fs.readdir(__dirname, (err, arquivos) => {
    console.log('lendo a pasta...')
    console.log(arquivos)
})