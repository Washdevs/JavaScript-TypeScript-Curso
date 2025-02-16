const _velocidade = Symbol("velocidade"); // Symbol é um identificador único que não pode ser acessado de fora da classe e nem ser alterado
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this[_velocidade] = 0; // Atributo privado que não pode ser acessado de fora da classe
  }
  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return; // Verificação que é feita se der certo da seguimento se não o Return faz a execução pular fora do métodod
    this[_velocidade] = valor; //
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro = new Carro("Fusca");
for (let i = 0; i <= 200; i++) {
  carro.acelerar();
}

carro.velocidade = 99;
console.log(carro.velocidade);
