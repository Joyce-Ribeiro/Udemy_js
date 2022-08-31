const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
] 
const paraObjeto = json =>JSON.parse(json)


const selectPreco = function (produtos){
    return produtos.preco
}

let array = carrinho.map(paraObjeto)
let precos = array.map(selectPreco)
console.log(precos)
console.log(carrinho.map(paraObjeto).map(selectPreco))