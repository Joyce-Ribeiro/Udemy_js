function checarAnoBissexto(ano){
    let res = false
    if (ano%4 == 0){
        res = true
    }
    if (ano%100==0){
        if(ano%400==0){
            res = true
        }else{
            res = false
        }
    }
    return res
}
console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))