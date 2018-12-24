//estrategia 1 para valores padroes

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1())


// estrategias 2, 3 e 4 para valores padroes
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // 'a' é undefined? senao recebe 1
    b = 1 in arguments ? b : 1 // 'b' é o indice 1 dos argumentos? senao recebe 1
    c = isNaN(c) ? 1 : c // 'c' eh um NaN? entao recebe 1

    return a + b + c
}

console.log(soma2())

//forma do ES2015

function soma3(a = 1, b = 1, c = 1){

    return a + b + c
}

console.log(soma3())
