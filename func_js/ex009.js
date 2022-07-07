function arredondar(n){
    if (n%5){
        return n+(5-(n%5))
    }else{
        return n
    }
}
function boletin(n){
    if (n>=38){
        newNota=arredondar(n)
        return [newNota, "aprovado"]
    }else{
        return [n, "reprovado"]
    }
}
console.log(boletin(40))
console.log(boletin(100))
console.log(boletin(30))
console.log(boletin(38))
console.log(boletin(88))
console.log(boletin(61))