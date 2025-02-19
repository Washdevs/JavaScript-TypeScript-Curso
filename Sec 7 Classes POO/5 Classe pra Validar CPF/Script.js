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
}
