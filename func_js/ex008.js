function pontuacao(st){
    let vetor = st.split(' ')
    let bestpont=vetor[0]
    let worstpont= vetor[0]
    let breakrecord=0
    let resposta=[]
    let posworst=0
    for (let c=1;c < vetor.length; c++){

        if (parseInt(vetor[c])>parseInt(bestpont)){
            breakrecord++
            bestpont=vetor[c]
            
        }
        else if (parseInt(vetor[c])<parseInt(worstpont)){
            worstpont=vetor[c]
            posworst=c+1
            
        }
    }  
    resposta.push(breakrecord)
    resposta.push(posworst)
    return resposta
}
console.log(pontuacao("10 20 20 8 25 3 0 30 1"))