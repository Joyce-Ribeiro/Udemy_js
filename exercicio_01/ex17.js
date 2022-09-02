function somarNumeros(array){
    let res = array.reduce(function(acumulador,atual){
        return acumulador+atual
    })
    return res
}
console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))