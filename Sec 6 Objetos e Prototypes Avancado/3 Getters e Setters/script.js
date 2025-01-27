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
        // O trabalho do get é so pegar o valor no momento e exibir ele
        return preco;
      },
      set: function () {
        // O trabalho do set é validar o valor
        if (typeof this.preco != "number") {
          throw new TypeError("O tipo deve ser um número");
        }
      }
    }
  });
}

// Segundo exemplo manipulando o objeto com a função construtora
function criaProduto() {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", "");
      nome = valor;
    }
  };
}

// const p1 = new Produto("Camiseta", 22);
// p1.preco = 25; // preço não é alterado por causa do writable
// console.log(p1.nome, p1.preco);

const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa";
console.log(p2.nome);
