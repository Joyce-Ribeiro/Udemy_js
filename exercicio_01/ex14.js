function objetoParaArray(objeto){
 let chaves = Object.keys(objeto)
 let valor = Object.values(objeto)
 let array = []
 for(let i =0; i<chaves.length;i++){
    let atributo = []
    atributo.push(chaves[i])
    atributo.push(valor[i])
    array.push(atributo)
 }
 return array
}
console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))
console.log(objetoParaArray({
    codigo: 111111,
    preco: 12000
}))