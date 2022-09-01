function receberSomenteOsParesDeIndicesPares(array){
    let resultado = array.filter(function(e, indice){
        const numPar = e%2 ==0
        const indicePar = indice %2 ==0
        return numPar && indicePar
    })
    return resultado
}
console.log(receberSomenteOsParesDeIndicesPares([1,2,3,4]))
console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))