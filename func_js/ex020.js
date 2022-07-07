function sacarDinheiro(saque){
    let c100=0
    let c50=0
    let c10=0
    let c5=0
    let c1=0
    while(saque>=100){
        saque-=100
        c100++
    }
    while(saque>=50){
        saque-=50
        c50++
    }
    while(saque>=10){
        saque-=10
        c10++
    }
    while(saque>=5){
        saque-=5
        c5++
    }while(saque>=1){
        saque-=1
        c1++
    }
    return calcularNota(c100,c50,c10,c5,c1)
    
}
function calcularNota(c100,c50,c10,c5,c1){
    let resultado=''
    if (c100>0){
        resultado+=`${c100} nota(s) de R$ 100.\n`
    }
    if (c50>0){
        resultado+=`${c50} nota(s) de R$ 50.\n`
    }
    if (c10>0){
        resultado+=`${c10} nota(s) de R$ 10.\n`
    }
    if (c5>0){
        resultado+=`${c5} nota(s) de R$ 5.\n`
    }
    if (c1>0){
        resultado+=`${c1} nota(s) de R$ 1.\n`
    }
    return resultado
}
console.log(sacarDinheiro(153))