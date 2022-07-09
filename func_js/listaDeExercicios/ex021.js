function calcularPreco(idade){
    let tot=100
    if(idade<10){
        tot+=80
    }else if(idade<30){
        tot+=50
    }else if(idade<60){
        tot+=95
    }else if(idade>60){
        tot+=130
    }
    return tot
}
console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));