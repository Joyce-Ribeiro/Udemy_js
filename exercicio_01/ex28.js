function filtrarPorQuantidadeDeDigitos(array, quant){
    let res = []
    for(let i =0; i<array.length; i++){
        if(String(array[i]).length ==  quant){
            res.push(array[i])
        }
    }
    return res
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) )