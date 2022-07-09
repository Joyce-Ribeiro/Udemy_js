function calcularValor(mes, valor){
    if (mes>0 && mes<13){
        let atraso= mes-1
        let montante = valor * ((1+0.05)**(mes-1))
        return montante.toFixed(2)
    }else{
        return "mês inválido"
    }
}
console.log(calcularValor(4, 100))