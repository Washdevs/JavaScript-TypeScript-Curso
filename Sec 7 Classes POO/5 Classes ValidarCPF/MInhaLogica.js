//CPF 705.484.450-52 e 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    if (!cpfEnviado) throw new Error("CPF não informado");
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, "") //Expressão regular para substituir tudo que não for número por vazio
    });
  }

  valida() {
    if (!/^\d+$/.test(this.cpfLimpo)) return "CPF inválido";
    if (this.cpfLimpo.length !== 11) return "Tamanho inválido";
    if (this.isSequencia()) return "CPF Inválido, Não pode ser uma sequência";
    if (this.calculo()) return "CPF Válido";
    return "Calculo incorreto, CPF inválido";
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

  calculo() {
    const cpf = this.cpfLimpo;
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
}

const validaCPF = new ValidaCPF("075.974.301-08");
console.log(validaCPF.valida());
