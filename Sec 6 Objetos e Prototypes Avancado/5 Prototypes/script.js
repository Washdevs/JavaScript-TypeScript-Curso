//Função construtora pode ser imaginada como um molde -> classe

/*um problema para resolver é toda pessoa criadda tera o metodo nomeCompleto e cadda pessoa vai ocupar um espaço na memória com essse método
Poderia ser mais performático se resolvessemos isso para todas as pessoas chamassemos este método 1 vez só e não um individual por pessoa
Prototypes irão nos ajudar neste problema*/

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome; // na abordagem do professor este método continua aqui
}

Pessoa.prototype.nomeCompletin = function () {
  // Este caso o nomeCompleto vai ser lido como uma função
  //Para funcionar neste cenário ele deve retornar para a instancia oque ela quer herdar vindo do Objeto
  return this.nome + " " + this.sobrenome;
}; //Esta é uma forma de herdar estas propriedades. então todos os objetos que vierem de Pessoa vão ter no caso nome e sobrenome

Pessoa.prototype.nomeComplet = "Opa";

//Prototype permite que os objetos herdem propriedades e métodos uns dos outros, é importando na OO.
//Para que serve? Compartilhar métodos e propriedades entre instâncias.
//Implementar herança: Você pode estender objetos ou criar cadeias de protótipos para que objetos herdem funcionalidades de outros.

const pessoa1 = new Pessoa("Luiz", "Almeida");
const pessoa2 = new Pessoa("Luan", "Azeredo");
const data = new Date();

Pessoa.prototype.Date;
console.dir(Object.getPrototypeOf(Pessoa));
console.dir(data);
console.dir(pessoa1);
console.dir(pessoa2.nomeCompleto);
console.dir(pessoa2.nomeCompletin);
console.dir(pessoa2.nomeComplet);
console.dir(pessoa2.nomeCompleto());

/* 
Afinal a explicação é a abordagem que fiz é uma método no prototype então toda instancia que herdar pessoa pode chamar este método
O do professor é um prototype estático que em toda instância terá esta prorpiedade estática que não muda e não depende de this

Quando usar cada um?
Método no protótipo (sua abordagem): Use quando precisa de comportamento dinâmico que depende de propriedades de cada instância.

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
};

Propriedade no protótipo (abordagem do professor): Use quando quer definir um valor padrão ou constante compartilhado entre todas as instâncias.

Pessoa.prototype.nomeCompleto = "Opa";
*/
