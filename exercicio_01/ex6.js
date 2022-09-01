function inverso(entrada){
    if(typeof entrada == "boolean"){
        return !entrada
    }if(typeof entrada == "number"){
        return entrada*(-1)
    }else{
        return "booleano ou números esperado, mas o parâmetro é do tipo string"
    }
}
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))