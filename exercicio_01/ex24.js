function contarCaractere(char, string){
    let c =0
    for(let i=0 ; i<string.length; i++){
        if (string[i]==char){
            c++
        }
    }
    return c
}
console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))