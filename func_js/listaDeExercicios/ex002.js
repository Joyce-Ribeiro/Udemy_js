function tipotri(a, b, c){
    if (a==b && b==c){
        return 'Equilátero'
    }
    else if(a!=b && b!=c && c!=a){
        return 'Escaleno'
    }else{
        return 'Isosceles'
    }
    
}
console.log(tipotri(3,2,4))
console.log(tipotri(3,3,4))
console.log(tipotri(3,3,3))