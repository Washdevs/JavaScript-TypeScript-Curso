function Produto(nome, preco) {
  this.nome = nome;

  Object.defineProperties(this, {
    // Para mais de uma propriedade, chamamos e jogamos cada objeto com suas configurações
    nome: {
      enumerable: true,
      writable: true,
      value: nome,
      configurable: true
    },
    preco: {
      enumerable: true,
      configurable: false,
      get: function () {
        return preco;
      },
      set: function () {
        if (typeof this.preco === "number") {
          preco = this.preco;
        } else {
          console.log("preço não pode ser string");
        }
      }
    }
  });
}

const p1 = new Produto("Camiseta", "22");
p1.preco = 25; // preço não é alterado por causa do writable
console.log(p1.nome, p1.preco);
