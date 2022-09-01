function repetir(numero, repeticao){
    let array = []
    for(let i=0; i<repeticao; i++){
        array.push(numero)
    }
    return array
}
console.log(repetir('código',2))
console.log(repetir(7,3))