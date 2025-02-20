class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, "")
    });
  }

  geraNovoCpf() {}

  validaSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //se cpfLimpo na posição 0 se repete 11 vezes. Se isto for igual a cpfLimpo é true
  } // === não é para receber igual é = ele serve para comparar, cpf limpo se repete 11 vezes igual é a operação atrás? se true a função valida vai dar return Não pode ser sequencia

  validacpf() {
    if (!this.cpfLimpo) return "Não é Limpo";
    if (typeof this.cpfLimpo !== "string") return "Não é String";
    if (this.cpfLimpo.length !== 11) return "Não tem 11 digitos";
    if (this.validaSequencia()) return "Não Pode Ser sequencia";
    if (!this.geraNovoCpf()) return "Não gerou novo CPF";
    return "Valido";
  }
}
//070.987.720-03
const cpf = new ValidaCPF("070.987.720-03");
console.log(cpf.validacpf());
