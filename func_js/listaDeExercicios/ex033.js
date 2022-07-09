let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]
function concatenar(...args){
    let tam = arguments.length
    let res = []
    for (i=0; i<tam;i++){
        res= res.concat(arguments[i])
    }
    return res;
}
console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))