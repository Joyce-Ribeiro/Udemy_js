function buscarPalavrasSemelhantes(slice, array){
    let res = []
    for(let i = 0; i<array.length; i++){
        if(array[i].includes(slice)){
            res.push(array[i])
        }
    }
    return res
}
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile","profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java","c++"]))