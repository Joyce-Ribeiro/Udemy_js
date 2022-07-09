function paresImpares(vetor){
    let tam = vetor.length
    let par = 0
    let impar= 0
    for (i=1; i<=tam;i++){
        if (vetor[i]%2==0){
            par++

        }else{
            impar++
        }
    }
    return `temos ${par} pares e ${impar} impares`
    
}
console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))