function verificacaoDeString(st1, st2){

    let vetor1=[]
    let vetor2=[]
    let tam1= st1.length
    let tam2= st2.length
    let resultado = true
    
    
    for (i=0;i<tam1;i++){
    vetor1.push(st1[i].toUpperCase())
    
}
    for (j=0;j<tam2;j++){
    vetor2.push(st2[j].toUpperCase())
    
}
    for (k=0; k<tam1;k++){
        let res = true
        res=vetor2.includes(vetor1[k])
        if (res==false){
            resultado = false
        }
    }
    return resultado
}

console.log(verificacaoDeString('abc','cba'))
/*resposta alternativa
function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abcd','cba'))*/