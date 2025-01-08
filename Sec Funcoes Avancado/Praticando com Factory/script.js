function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //seter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    fala(assunto = "Falando nada") {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    //geter
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc());
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Washington Sergio Campos";
console.log(p1.nomeCompleto);
console.log(p1.fala());
