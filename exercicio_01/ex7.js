function estaEntre( min, max, n, incluso=false){
    if (incluso==false){
        if(n>min && n<max){
            return true
        }else{
            return false
        }
        
    }else{
        if(n>=min && n<=max){
            return true
        }else{
            return false
        }

    }
}
console.log(estaEntre(10,100,50))
console.log(estaEntre(16,100,160))
console.log(estaEntre(3,150,3))
console.log(estaEntre(3,150,3))
