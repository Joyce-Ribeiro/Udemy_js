function funcaoDaSorte(num){
    let sorteio = Math.floor(Math.random()*10+1)
    if(num == sorteio){
        return`Parabéns! O número sorteado foi ${sorteio}`
    }else{
        return`Que pena! O número sorteado foi ${sorteio}`
    }

}
console.log(funcaoDaSorte(10))