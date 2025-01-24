function Produto(nome, preco) {
  this.nome = nome;

  Object.defineProperty(this, "preco", {
    enumerable: true, // mostra a chave -- se false ela não aparece na amostra de chaves com object.keys() essa chave não aparece
    value: preco, // Valor -- que quer dar a propriedade e pode ser qualquer coisa como por exemplo pode até executar uma função
    writable: false, // pode alterar -- pode alterar o valor da propriedade
    configurable: false // pode reconfigurar -- pode reconfigurar a chave como por exemplo pode deletar a chave
  });
}

const p1 = new Produto("Camiseta", 20);
p1.preco = 25; // preço não é alterado por causa do writable
console.log(Object.keys(p1));
