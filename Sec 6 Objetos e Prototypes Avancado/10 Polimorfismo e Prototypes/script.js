function CriaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  };
}

const p1 = CriaPessoa("Luiz", "Otávio");
console.log(p1);
