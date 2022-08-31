const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
] 
const paraObjeto = json =>JSON.parse(json)


const selectPreco = function (produtos){
    return produtos.preco
}
Array.prototype.mapear = function(callback){
    const array = []
    for(i=0; i<this.length;i++){
        array.push(callback(this[i]))
    }
    return array
}
console.log(carrinho.map(paraObjeto).map(selectPreco))