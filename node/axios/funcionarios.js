const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

function nacionalidade(funcionario){
        return funcionario.pais=='China' 
    }

function genero(funcionario){
    return funcionario.genero=='F'
    }

function menorSalario(funcionario, atual){
        if(funcionario.salario<atual.salario){
            return funcionario
        }else{
            return atual
        }//return funcionario.salario < atual.salario ? funcionario:atual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    const func = funcionarios
    .filter(nacionalidade)
    .filter(genero)
    .reduce(menorSalario)
    console.log(func)
})


