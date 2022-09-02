function removerVogais(string){
    let vogal = ["a","e","i","o","u"]
    vogal.forEach(v => string = string.replace(v, ''))
    return string
}
console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))