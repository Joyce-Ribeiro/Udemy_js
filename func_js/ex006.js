function jurosSimples(capitalInicial, taxa,tempoAplic){
    let juros=capitalInicial*taxa*tempoAplic
    let montante = capitalInicial+juros
    return montante
}
function jurosCompostos(capitalInicial, taxa,tempoAplic){
    let montante = capitalInicial*((1+taxa)**tempoAplic)
    return montante    
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));