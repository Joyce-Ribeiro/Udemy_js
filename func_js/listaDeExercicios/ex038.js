function imprimirImpares(i, f){
    if (f<i){
        let f2=f
        let i2=i
        i=f2
        f=i2
    }
    for (let i=3;i<=19;i++){
        if(i%2!=0){
            console.log(i)
        }
    }

}
/*resposta alternativa
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}*/
imprimirImpares(19, 3)