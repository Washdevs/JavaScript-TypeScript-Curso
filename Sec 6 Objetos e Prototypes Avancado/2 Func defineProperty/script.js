function Produto(nome, marca, preco) {
  this.nome = nome;
  this.marca = marca;

  Object.defineProperty(this, "preco", {
    enumerable: true, // mostra a chave -- se false ela não aparece na amostra de chaves com object.keys() essa chave não aparece
    value: preco, // Valor -- que quer dar a propriedade e pode ser qualquer coisa como por exemplo pode até executar uma função
    writable: false, // pode alterar -- pode alterar o valor da propriedade
    configurable: false // pode reconfigurar -- pode reconfigurar a chave como por exemplo pode deletar a chave
  });
}

<<<<<<< HEAD
const p1 = new Produto("Camiseta", 20);
p1.preco = 25; // preço não é alterado por causa do writable
console.log(Object.keys(p1));
=======
const p1 = new Produto("Camisa", "Lost", 120);
console.log(p1);
console.log(`O produto: ${p1.nome} da marca: ${p1.marca} custa ${p1.preco}`);
>>>>>>> c807d952b843497baafef4e03433b2decac0f1a5
