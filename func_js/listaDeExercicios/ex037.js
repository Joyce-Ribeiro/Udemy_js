function pA(n, a1, r){
    let an = 0
    let soma = 0
    for(let i =1;i<n+1;i++){
        let an = a1+((i-1)*r)
        console.log(an)
        soma+=an
    }
    console.log('Soma: '+soma)
}
function pG(n, a1,q){
    let an = 0
    let soma = 0
    for(let i =1;i<n+1;i++){
        let an = a1*(q**(i-1))
        console.log(an)
        soma+=an
    }
    console.log('Soma: '+soma)
}
pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)