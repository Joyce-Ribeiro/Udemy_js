function ebissexto(ano){
    if (ano<=0){
        return false
    }else if (ano%400==0){
        return true
    }else if(ano%100==0){
        return false
    }else if(ano%4==0){
        return true
    }else{
        return false
    }
    
}
console.log(ebissexto(0))
console.log(ebissexto(4))
console.log(ebissexto(100))
console.log(ebissexto(400))
console.log(ebissexto(800))
console.log(ebissexto(2020))
console.log(ebissexto(2021))