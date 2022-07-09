function conceituarNotas(vetor){
    let resposta = []
    for(let i=0;i<vetor.length; i++){
        if(vetor[i]>=0.0 && vetor[i]<=4.9){
            resposta.push('D')
        }else  if(vetor[i]>=5.0 && vetor[i]<=6.9){
            resposta.push('C')
        }else  if(vetor[i]>=7.0 && vetor[i]<=8.9){
            resposta.push('B')
        }else  if(vetor[i]>=9.0 && vetor[i]<=10.0){
            resposta.push('A')
        }else {
            resposta.push('Nota inválida')
        }
    }
    return resposta
}
let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)
console.log(vetorConceitos)