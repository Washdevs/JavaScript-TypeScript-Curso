class ValidaCPF {
  constructor(input) {
    if (!input) throw new Error("CPF não informado");
    Object.defineProperty(
      this,
      "input",
      {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, "")
      },
      (this.botao = document.getElementById("input")),
      (this.handleClick = this.handleClick.bind(this)),
      this.botao.addEventListener("click", this.handleClick)
    );
  }
  validarCPF() {
    if (!/^\d+$/.test(input)) return console.log("CPF inválido");
    if (this.input.length !== 11) return console.log("Tamanho inválido");
    if (this.isSequencia()) return console.log("CPF Inválido, Não pode ser uma sequência");
    if (this.calculo()) return console.log("CPF Válido");
    return console.log("Calculo incorreto, CPF inválido");
  }

  isSequencia() {
    const sequencia = this.input[0].repeat(this.input.length);
    return sequencia === this.input;
  }

  calculo() {
    const cpf = this.input;
    if (cpf.length !== 11) return false;

    const cpfArray = cpf.split("").map(Number);

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += cpfArray[i] * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    if (cpfArray[9] !== digito1) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += cpfArray[i] * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    if (cpfArray[10] !== digito2) return false;

    return true;
  }
  handleClick(event) {
    console.log("Botão clicado!");
    console.log(this);
  }
}

const cpfInput = document.getElementById("cpf");
const cpfValor = cpfInput ? cpfInput.value : "";
// Cria a instância passando o CPF informado
const componente = new ValidaCPF(cpfValor);
