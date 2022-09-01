function removerPropriedade(objeto,atributo){
    let copia = Object.assign({}, objeto)
    delete copia[atributo]
    return copia
}
console.log(removerPropriedade({a:1, b:2}, "a"))