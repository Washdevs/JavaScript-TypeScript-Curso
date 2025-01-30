function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//Isto é escrever métodos no prototype do produto
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
} // 2 - bem aqui falamos que camiseta liga com Produto usando a funçaõ Call(quem liga, prop q quer, outra prop que quer)
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; // para que o proto mostre que o construtor que cria o objeto camiseta é Camiseta e não o de Produto

Produto.prototype.aumento = function (precentual) {
  this.preco = this.preco + this.preco * (precentual / 100);
};

const produto = new Produto("Calça", 90);
const camiseta = new Camiseta("Regata", 99, "Preto");

console.log(produto);

camiseta.aumento(10);
console.log(camiseta);
// 1 - Aqui nos vemos que a Camiseta tem uma propriedade que Produto não tem
