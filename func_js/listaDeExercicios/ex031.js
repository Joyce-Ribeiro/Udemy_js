function numerosNegativos(vetor){
    let tam = vetor.length
    let c=0
    for (i=1;i<=tam;i++){
        if (vetor[i]<0){
            c++
        }
    }
    return c
}
vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))
