class Nomeadora {
  constructor(nome) {
    this.nome = nome;
  }
  nomear() {
    return this.nome;
  }
}
class Pessoa extends Nomeadora {
  constructor(nome, sobrenome) {
    super(nome); // Operador para falar qual propriedade da classe pai eu quero usar
    this.sobrenome = sobrenome; // Propriedade da classe filha
  }
  nomear() {
    return `${super.nomear()} ${this.sobrenome}`; //Super para chamar o método da classe pai
  }
}

const pessoa = new Pessoa("Lucas", "Fernandes");
console.log(pessoa.nome + " " + pessoa.sobrenome);
