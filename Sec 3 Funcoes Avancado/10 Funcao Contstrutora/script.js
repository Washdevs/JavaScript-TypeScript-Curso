//Função construtora -> objetos = constroi objetos - já faz automaticamente cria e retorna o objeto
//Função fabrica -> objeto = fabrica objetos - nos a criamos e fazemos ela retornar o objeto
//Construtora -> Pessoa
//É igual criar um construtor em c# com a função
//não precisa de return

function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear(el);
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };

  this.addNumDisplay = (el) => (this.display.value += el.innerText);
  this.clear = () => (this.display.value = " ");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
  this.inicia = () => this.capturaCliques();
  this.realizaConta = () => {
    let conta = this.display.value;
    try {
      this.display.value = eval(conta); // Use o valor do display
      if (!conta) {
        console.log("Conta invalida");
        return;
      }
      this.display.value = eval(conta);
    } catch (e) {
      console.log(`Erro ao calcular`);
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
