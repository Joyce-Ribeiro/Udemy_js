function fatorial(n){
    let fat=1
    if (n==0){
        return 1
    }
    for(c=1; c<=n;c++){
        fat*=c
    }
    return fat
}
console.log(fatorial(10))
//forma alternativa
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))