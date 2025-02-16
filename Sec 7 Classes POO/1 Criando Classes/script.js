class Nomeadora {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  VerificarIdade() {
    if (this.idade >= 18) {
      console.log(`Olá, eu sou o ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura} de altura`);
    } else {
      console.log("O usuário não pode ter menos de 18 anos");
    }
  }
}

const pessoa = new Nomeadora("Lucas", 19, 1.8);
pessoa.VerificarIdade();
