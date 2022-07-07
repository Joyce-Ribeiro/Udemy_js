function venderFruta(fruta){
    switch(fruta){
        case 'maçã':
            return "Não vendemos esta fruta aqu"
        case 'kiwi':
            return "Estamos com escassez de kiwis"
        case 'melancia':
            return "Aqui está, são 3 reais o quilo"
        default:
            return "erro"

    }
}
console.log(venderFruta('maçã'))
console.log(venderFruta('kiwi'))
console.log(venderFruta('melancia'))
console.log(venderFruta('alcatra'))