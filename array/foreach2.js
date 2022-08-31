Array.prototype.paraCada = function(callback){
    for(let i=0 ;i<this.length; i++){
        callback(this[i],i,this) 
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.paraCada(function(nome,indice,array){
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})