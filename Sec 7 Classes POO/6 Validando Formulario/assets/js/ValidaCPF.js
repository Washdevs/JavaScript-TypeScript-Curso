//Lógica do Professor
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, "")
    });
  }

  validacpf() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.validaSequencia()) return false;
    if (this.geraNovoCpf()) return false;

    return this.NovoCpf === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfsemDigito = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfsemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfsemDigito + digito1); //This é a instancia, mudamos para classe pq o metodo é static e não depende de this.
    this.NovoCpf = cpfsemDigito + digito1 + digito2;
  }

  static geraDigito(cpfsemDigito) {
    let total = 0;
    let reverso = cpfsemDigito.length + 1;
    for (let Stringnumero of cpfsemDigito) {
      // console.log(Stringnumero, reverso);
      total += reverso * Number(Stringnumero);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  validaSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //se cpfLimpo na posição 0 se repete 11 vezes. Se isto for igual a cpfLimpo é true
  } // === não é para receber igual é = ele serve para comparar, cpf limpo se repete 11 vezes igual é a operação atrás? se true a função valida vai dar return Não pode ser sequencia
}

// const cpf = new ValidaCPF();

// if (cpf.validacpf()) {
//   console.log("CPF Válido");
// } else {
//   console.log("CPF Inválido");
// }
