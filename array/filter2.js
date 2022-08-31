const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
Array.prototype.filtro = function(callback){
    const array = []
    for(i=0; i<this.length;i++){
        if (callback(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
}

const caro = p => p.preco>=500
const fragil = p => p.fragil 

console.log(produtos.filtro(caro).filtro(fragil))