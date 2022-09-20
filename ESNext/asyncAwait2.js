function gerarNumerosEntre(min, max, numerosProibidos){
    if(min >max) [max,min]= [min, max]
    return new Promise((resolve, reject) =>{
        const fator = max -min +1
        const random = parseInt(Math.random()*fator)
        if(numerosProibidos.includes(random)){
            reject('Numero repetido!')
        }
        resolve(random)
    })
}
async function gerarMegaSena(qtNumeros, tentativas = 1){
    try{
    const numeros = []
    for(let _ of Array(qtNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
    }catch(e){
        if(tentativas >10){
            throw "Não deu certo!"
        }else{
            return gerarMegaSena(qtNumeros, tentativas +1)
        }
    }
}
gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)