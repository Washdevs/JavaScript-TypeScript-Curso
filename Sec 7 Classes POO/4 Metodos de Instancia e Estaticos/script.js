const _volume = Symbol("volume");
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this[_volume] = 0;
  }

  aumentarVolume() {
    this[_volume] += 1;
  }

  diminuirVolume() {
    this[_volume] -= 2;
  }

  get volume() {
    return this[_volume];
  }
  // método de instancia é o metodo que nos chamamos usando a instacia.nome do metodo.
  // Com a palavra static o metodo passa a ser um metodo de classe, ou seja, não é mais possivel chamar o metodo usando a instacia.nome do metodo.
  //pode ser chamado direto sem instanciar a classe.
  static trocaPilha() {
    console.log("Pilha trocada");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1.volume);
console.log(controle1);

//Chamando método statico
ControleRemoto.trocaPilha();

console.log(`TV: ${controle1.tv}, Volume: ${controle1.volume}`);
