function calcularCrescimento(a1,tx1,a2,tx2){
    if (a1==a2){
        if(tx1>tx2){
            return"A criança 1 ultrapassará a criança 2 em 1 ano"
        }
        else if(tx1<tx2){
            return"A criança 2 ultrapassará a criança 1 em 1 ano"
        }else{
            return"Ambas tem a mesma altura e taxa de crescimento"
        }
    }
    if(a1<a2){
        if(tx1<tx2 || tx1==tx2){
            return"A criança 1 não ultrapassará a criança 2"
        }
        else if(tx1>tx2){
            let ano = calcularTempo(a2,tx2,a1,tx1)
            return`A criança 1 ultrapassará a criança 2 em ${ano} ano`
        }
    }
    if(a1>a2){
        if(tx1>tx2 || tx1==tx2){
            return"A criança 1 não ultrapassará a criança 2"
        }
        else if(tx1<tx2){
            let ano = calcularTempo(a1,tx1,a2,tx2)
            return`A criança 2 ultrapassará a criança 1 em ${ano} ano`
        }
    }
}
function calcularTempo(aMaior,txAMaior,aMenor,txAMenor){
    let anos = 0
    while (aMaior>aMenor){
        aMaior+=txAMaior
        aMenor+=txAMenor
        anos++
    }
    return anos
}

console.log(calcularCrescimento(150, 2, 130, 4));