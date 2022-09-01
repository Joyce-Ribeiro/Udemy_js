function receberPrimeiroElemento(array){
    let res = []
    let tamanho = array.length
    res.push(array[0])
    res.push(array[tamanho-1])
    return res
}
console.log(receberPrimeiroElemento([7,14,"olá"]))
console.log(receberPrimeiroElemento([-100,"Aplicativo",16]))