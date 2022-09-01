function filtrarNumeros(array){
    let res =[]
    res =array.filter(function(e){
        return typeof e == "number"
    })
    return res
}
console.log(filtrarNumeros(["JavaScript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["a",  "c"]))