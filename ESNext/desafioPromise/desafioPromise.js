const fs=require('fs')
const path = require('path')
function lerArquivo(diretorio){
    return new Promise((resolve, reject) => {
        try{
            const caminho= path.join(__dirname, diretorio)  
            fs.readFile(caminho, 'utf-8', (conteudo) =>{
                resolve(conteudo.toString())
            })
        }catch(e){
            reject(e)
        }
    })
}
const caminho = 'ola.txt'
lerArquivo(caminho)
    .then(console.log)
    .catch(err => console.log('ERRO',err))