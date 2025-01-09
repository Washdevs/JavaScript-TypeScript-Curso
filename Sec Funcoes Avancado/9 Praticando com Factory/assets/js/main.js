//Precisamos da palavra this sempre que queremos inicializar uma chave do objeto
//quem chama o evento no momento é quem for o this naquele momento
function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaTeclas();
    },

    pressionaTeclas() {
      document.addEventListener("keyup", (e) => {
        const tecla = e.key;
        if (
          [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            ".",
            "(",
            ")",
            "+",
            "-",
            "*",
            "/",
          ].includes(tecla)
        ) {
          this.btnParaDisplay(tecla);
        }
        if (tecla === "Backspace") {
          this.apagaUm();
        }
        if (tecla === "Enter" || tecla === "=") {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      55;
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
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = " ";
    },

    cliqueBotoes() {
      //this -> calculadora
      document.addEventListener("click", (e) => {
        const el = e.target; // até aqui target é any -> qualquer coisa, então qualquer coisa q chegar depois de click el recebe esse valor

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText); //innerText é o valor que está dentro do botão
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      //recebe o valor como parametro
      this.display.value += valor; //mostra no display o valor que tem no button
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
