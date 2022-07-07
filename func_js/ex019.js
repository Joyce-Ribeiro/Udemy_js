function calcularVenda(cod, qnt){
    switch (cod){
        case 100:
            return qnt*3
        case 200:
            return qnt*4
        case 300:
            return qnt*5.5
        case 400:
            return qnt*7.5
        case 500:
            return qnt*3.5
        case 600:
            return qnt*2.8
        default:
            "Produto não existente"
    }
}
console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))