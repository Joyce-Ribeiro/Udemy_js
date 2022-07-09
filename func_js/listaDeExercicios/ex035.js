let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(v1,v2){
    let vetorResultado = v1
    let tam = v2.length
    for(i=0;i<tam;i++){
        console.log(vetorAdiciona[i])
        vetorResultado.push(vetorAdiciona[i])
    }
    console.log(`Vetor adicionado:`+vetorAdiciona)
    console.log(`Vetor resultado:`+vetorResultado)
}
adicionaVetor(vetorPilha, vetorAdiciona)