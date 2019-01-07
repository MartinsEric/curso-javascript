const notas = [6.5, 7.2, 8.2, 4.4, 6.3, 9.4, 5.5]

// sem callback
const notasBaixas1 = []

for( let i in notas){
    if( notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)


const notasBaixas3 = notas.filter( nota => nota < 7)

console.log(notasBaixas3)