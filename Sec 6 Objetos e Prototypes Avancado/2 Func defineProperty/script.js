function Produto(nome, marca, preco) {
  this.nome = nome;
  this.marca = marca;

  Object.defineProperty(this, "preco", {
    enumerable: true, // mostra a chave
    value: preco, // Mostra valor da chave
    writable: false, // pode alterar
    configurable: false // pode reconfigurar
  });
}

const p1 = new Produto("Camisa", "Lost", 120);
console.log(p1);
console.log(`O produto: ${p1.nome} da marca: ${p1.marca} custa ${p1.preco}`);
