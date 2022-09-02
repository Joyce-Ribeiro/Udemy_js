function segundoMaior(array){
    const maior = Math.max(...array)
    numero = array.filter(n => n!= maior)
    const segundomaior = Math.max(...numero)
    return segundomaior

}
console.log(segundoMaior([12, 16, 1, 5]))