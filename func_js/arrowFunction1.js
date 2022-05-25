let dobro = function(a){
    return 2*a
}
dobro = (a)=>{
    return 2*a
}
dobro = a =>2*a //return implicito
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá'//possui param porem não é obrigatorio
console.log(ola())