function calcularMedia(array){
    let soma = array.reduce(function(acumulador, atual){
    return acumulador+atual
})
 let media = soma/array.length
 return media
}
console.log(calcularMedia([0,10]))
console.log(calcularMedia([1,2,3,4,5]))