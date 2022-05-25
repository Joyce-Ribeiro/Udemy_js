function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}//o this não varia em uma função arrow(sem bind e sem armazenar o this em uma constante)
new Pessoa