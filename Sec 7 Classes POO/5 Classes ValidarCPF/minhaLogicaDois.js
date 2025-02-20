class ValidaCPF {
  constructor(input) {
    if (!input) throw new Error("CPF não informado");
    Object.defineProperty(this, "input", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: input.replace(/\D+/g, "")
    });
  }
  validarCPF() {
    if (this.input.length !== 11) return console.log("Tamanho inválido");
    if (this.isSequencia()) return console.log("CPF Inválido, Não pode ser uma sequência");
    if (this.calculo()) return console.log("CPF Válido");
    return console.log("CPF inválido");
  }

  isSequencia() {
    return this.input.charAt(0).repeat(this.input.length) === this.input;
  }

  calculo() {
    const cpfParcial = this.input.slice(0, -2);
    const digito1 = this.calculaDigito(cpfParcial);
    const digito2 = this.calculaDigito(cpfParcial + digito1);
    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.input;
  }

  calculaDigito(cpfParcial) {
    let soma = 0;
    let peso = cpfParcial.length + 1;

    for (let char of cpfParcial) {
      soma += parseInt(char) * peso;
      peso--;
    }

    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
}

const valid = new ValidaCPF("070.987.720-03");
valid.validarCPF();
