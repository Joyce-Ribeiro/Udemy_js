function trocaValores(v1,v2){
    let tam =vetorA.length
    for(let i = 0; i < tam; i++){
        vetorA[i]=vetorA[i]+vetorB[i]
        vetorB[i]=vetorA[i]-vetorB[i]
        vetorA[i]=vetorA[i]-vetorB[i]
    }
    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)