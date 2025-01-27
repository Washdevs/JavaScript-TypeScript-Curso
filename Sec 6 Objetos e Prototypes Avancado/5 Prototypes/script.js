//Função construtora pode ser imaginada como um molde -> classe

/*um problema para resolver é toda pessoa criadda tera o metodo nomeCompleto e cadda pessoa vai ocupar um espaço na memória com essse método
Poderia ser mais performático se resolvessemos isso para todas as pessoas chamassemos este método 1 vez só e não um individual por pessoa
Prototypes irão nos ajudar neste problema*/

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

const pessoa1 = new Pessoa("Luiz", "A.");
const pessoa2 = new Pessoa("Luan", "R.");

console.dir(pessoa1);
console.dir(pessoa2);

console.log(pessoa2.nomeCompleto());
