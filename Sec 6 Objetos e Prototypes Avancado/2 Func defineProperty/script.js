function Produto(nome, preco) {
  this.nome = nome;

  Object.defineProperty(this, "preco", {
    enumerable: true, // mostra a chave
    value: preco, // Mostra valor da chave
    writable: false, // pode alterar
    configurable: false // pode reconfigurar
  });
}

const p1 = new Produto("Camiseta", 20);
console.log(p1);
