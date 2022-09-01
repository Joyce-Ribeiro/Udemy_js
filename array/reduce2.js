const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.bolsista))
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado && bolsista //o resultado e o valor atual tem que dar true
})

console.log(todosBolsistas)

console.log(alunos.map(a => a.bolsista))
const umBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado || bolsista//pelo menos um deles tem que ser bolsista
})
console.log(umBolsista)