function maiorMenor(vetor){
    let tam = vetor.length
    let maior = 0
    let menor = vetor[0]
    for (i=1;i<=tam;i++){
        if (vetor[i]>maior){
            maior = vetor[i]
        }
        if (vetor[i]<menor){
            menor= vetor[i]
        }
    }
    return [maior,menor]
}
vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))