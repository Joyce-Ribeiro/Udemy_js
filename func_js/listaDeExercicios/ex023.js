function calcularNotaFinal(cod,n1,n2,n3){
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort()
    console.log(notas)
    let media = ((notas[2]*4)+(notas[1]*3)+(notas[0]*3))/10
    let mensagem = `código do aluno: ${cod}\n
    1º nota ${n1}\n
    2º nota ${n2}\n
    3º nota ${n3}\n
    média: ${media}\n`
    if (media>=5){
        mensagem+=`\tAPROVADO`
    }else{
        mensagem+=`\tREPROVADO`
    }
    return mensagem
}
console.log(calcularNotaFinal(123, 2.8, 6, 3.5))