const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa' ]
pilotos.pop() //exclue o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona na primeira posição
console.log(pilotos)

//slice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)
//excluir
pilotos.splice(3,1)//no indice 3 remove um elemento
console.log(pilotos)

const algunsPilotos1= pilotos.slice(2)//retorna um novo array com elementos apartir do indice 2
console.log(algunsPilotos1)
const algunsPilotos2= pilotos.slice(1,4)//apartir do indice 1, ao 4 sem o 4
console.log(algunsPilotos2)