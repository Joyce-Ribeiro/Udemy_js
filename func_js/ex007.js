function bhaskara(ax2,bx,c){
    let resultado= []
    delta = (bx**2)-(4*ax2*c)
    if (delta>=0){
        x1= (-(bx)+(Math.sqrt(delta)))/2*ax2
        x2 = (-(bx)-(Math.sqrt(delta)))/2*ax2
        resultado.push(x1)
        resultado.push(x2)
        return resultado
        
    }
    else{
        return "Delta é negativo"
    }
}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))