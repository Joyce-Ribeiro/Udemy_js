function construirPessoa(nome) {
    this.falar = function() {
            console.log(`Meu nome é ${nome}`)
    }
}
const p1 = new construirPessoa('Joyce')
p1.falar()