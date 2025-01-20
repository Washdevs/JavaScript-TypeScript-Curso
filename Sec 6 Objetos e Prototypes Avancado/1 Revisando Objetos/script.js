// const pessoa = {
//   nome: "Washington",
//   sobrenome: "sergio",
//   idade: [30, 20, 40],
//   sexo: "masculino",
//   altura: 1.8,
//   peso: 80
// };

// // nome, sobrenome, idade sção chaves que tem o valor do meu objeto pessoa

// console.log(pessoa.idade[0]); //to vendo só a idade no index 0
// console.log(pessoa["idade"]); //to vendo o array de idade inteiro

// log(pessoa.nome); //Washington

// // Definindo a classe Pessoa
// class Pessoa {
//   constructor(nome, sobrenome, idade, sexo, altura, peso) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.sexo = sexo;
//     this.altura = altura;
//     this.peso = peso;
//   }
// }

// // Criando instâncias da classe Pessoa
// const pessoa1 = new Pessoa("Washington", "Sergio", 30, "masculino", 1.8, 80);
// const pessoa2 = new Pessoa("Maria", "Silva", 25, "feminino", 1.65, 60);

// // Criando um array de pessoas
// const pessoas = [pessoa1, pessoa2];

// // Acessando propriedades aninhadas
// console.log(pessoas[0].nome); // "Washington"
// console.log(pessoas[1].idade); // 25
// console.log(pessoas[0].sexo); // "masculino"

const pessoa1 = new Object();

pessoa1.nome = "Washington";
pessoa1.sobrenome = "Sergio";
pessoa1.idade = 30;
pessoa1.sexo = "masculino";
pessoa1.falarNome = function () {
  console.log(`Olá: ${this.nome}`);
};

// pessoa1.getDataNascimento = function () {
//   pessoa1.idade = 2025 - this.idade;
//   console.log(`A data de nascimento é: ${pessoa1.idade}`);
// }; // Não é uma boa prática

// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return (anoAtual = dataAtual.getFullYear() - this.idade);
// };

// delete pessoa1.sexo; // Deletando a propriedade sexo

// console.log(pessoa1.nome); // "Washington"
// console.log(pessoa1.idade); // "Sergio"
// console.log(pessoa1.sexo); // undefined
// pessoa1.falarNome(); // "Washington"

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
// console.log(pessoa1[chave]); // se for chave vemos as chaves, se for pessoa1[chave] vemos os valores
// }

// é bom criarmos um molde para que tudo fique dentro do padrão daquele molde
// qual molde usaremos? Factory Functions e Constructor Functions essas duas são padrões de projetos

// Factory Functions - Funções Fábrica - Funções que retornam objetos - Padrão de projeto
// Constructor Functions - Funções Construtoras - Funções que constroem objetos - Padrão de projeto
// classes - para criar novos objetos - Padrão de projeto serve para abstrair a dificuldade de usar os padrões acima
// classe aqui pode nos ajudar na dificuldade de fazer uma herança por exemplo que é complicado e confuso no JS

// Factory Functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    falarNome() {
      console.log(`Olá: ${this.nome}`);
    },
    get nomeCompleto() {
      return `Olá ${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa("Washington", "Sergio");
console.log(p1.nomeCompleto); // só chamadno o nome do método sem os parenteses nós acessamos ele como se fosse uma propriedade
// para acessalo com parentese basta apagar a palavra get na função

// Constructor Functions
function Pessoa(nome, sobrenome) {
  // Sanitiza as entradas para conter apenas caracteres alfanuméricos e espaços
  this.nome = nome ? nome.replace(/[^a-zA-Z0-9 ]/g, "") : nome;
  this.sobrenome = sobrenome ? sobrenome.replace(/[^a-zA-Z0-9 ]/g, "") : sobrenome; // aqui um exemplo de uso de expressão regular

  this.falarNome = function () {
    if (!this.nome || !this.sobrenome) {
      return `Olá pessoa, seu nome não pode ser vazio`;
    } else {
      return `Seja Bem Vindo(a): ${this.nome} ${this.sobrenome}`;
    }
  };
  Object.freeze(this);
}

const p2 = new Pessoa("Washington!", "Campos123");
console.log(p2.falarNome());
