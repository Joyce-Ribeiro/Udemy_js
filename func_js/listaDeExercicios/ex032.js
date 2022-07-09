function mediaVetor(vetor){
    let tam = vetor.length
    let soma = 0
    for(i=0; i<tam;i++){
        soma+=vetor[i]
    }
    return (soma/tam).toFixed(2)
}
vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))