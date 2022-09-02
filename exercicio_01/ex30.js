function receberMelhorEstudante(objeto){
    let array = Object.values(objeto)
    let arrayDeMedia=[]
    for(let i =0; i<array.length; i++){
        let soma =0
        for (let j =0; j<array[i].length; j++){
            soma += array[i][j]
        }
        arrayDeMedia.push(soma/array[i].length)
    }
    const maior = Math.max(...arrayDeMedia)
    let nomes = Object.keys(objeto)
    let estudantes = []
    for(let k = 0; k<nomes.length; k++){
        estudantes.push([nomes[k], arrayDeMedia[k]])
    }
    estudantes.filter(function(estudante){
        if (estudante[1]==maior){
            melhorEstudante = estudante[0]            
        }
    })
    return {nome: melhorEstudante, media: maior}
}
console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))