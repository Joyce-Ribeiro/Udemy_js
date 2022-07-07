function arredondando (n){
    let round = `R$ ${n.toFixed(2).toString().replace(".",",")}`
    return round
}
console.log(arredondando(0.30000000000000004))