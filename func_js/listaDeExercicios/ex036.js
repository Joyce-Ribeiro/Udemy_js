let vetor = [1, 2, 3, 4, 5, 6]
function multiplicaVetor(vetor, n){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento*n)
    })
    return vetorResultado
}
function multiplicaVetorSeMaior(vetor, n){
    let vetorResultado = []
    vetor.forEach(elemento => {
        if(elemento>5){
            vetorResultado.push(elemento*n)
        }
        
    })
    return vetorResultado
}
console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetorSeMaior(vetor, 3))