function observarIntervalo(vetor){
    let tam = vetor.length
    let dentro= 0
    let fora = 0
    for (i=1;i<=tam;i++){
        if (vetor[i]>=10 && vetor[i]<=20){
            dentro++
        }else{
            fora++
        }
    }
    return `${dentro} números dentro do intervalo e ${fora} números fora do intervalo`
}
vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))