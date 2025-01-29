//new object -> object.prototype

const objA = {
  chaveA: "A"
};

const objB = {
  chaveB: "B"
};

const objC = {
  // Objeto literal
  chaveC: "C"
};

const objD = new Object();
objD.chaveD = "D";

Object.setPrototypeOf(objD, objC); // Set configura
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA); // Sabe a chave do prototype que recebe
console.log(objB.chaveB); // Sabe a propria chave
console.log(objA.chaveA); // Sabe a propria chave
console.log(objA.chaveB + " Pois não tem oque herdar"); // Não sabe a chave do prototype pois não recebe // Apenas o A não recebe nada, ele não herda, ele é herdado
console.log(objC.chaveA); // Recebe também a chave A, Isto porque se b recebe de a e c recebe de B C também recebe de A, um passa para o outro herdando e passando
console.log(objD.chaveB);
// Protoype não é recomendado para uso, mudanças etc...
// É melhor usar para ver o prototype usando Object.getPrototypeOf(objA); Get para ver
// ISto com as nossas funções construtoras

console.log("---------------------");

function Produto(nome, preco) {
  this.nome = nome;
  Object.defineProperty(this, "preco", {
    enumerable: true,
    value: preco,
    writable: true,
    configurable: false
  });
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};
//Neste caso aumento e desconto são prototype de Produto no caso é uma função q ao ser chamada ja vai ser executada
const produto = new Produto("Camisa", 50);

const p1 = {
  nome: "Caneca",
  preco: 19
};
Object.setPrototypeOf(p1, Produto.prototype); // (objeto que vai receber, Objeto que vai erdar.prototype)

produto.desconto(10);
produto.aumento(10);
console.log(produto);

p1.aumento(2);
p1.desconto(1);
console.log(p1);
