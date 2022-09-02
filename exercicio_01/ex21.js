function menorNumero(array){
    let menor = array.reduce(function(anterior, atual){
    if (anterior<atual){
        return anterior
    }else{
        return atual
    }
})
 return menor
}
console.log(menorNumero([10,5,35,65]))
console.log(menorNumero([5,-15,50,3]))