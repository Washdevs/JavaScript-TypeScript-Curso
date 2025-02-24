class ValidaForm {
  constructor() {
    this.form = document.querySelector(".form");
    this.cpfInput = this.form.querySelector(".cpf");
    this.tooltip = document.getElementById("tooltip");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Formulário não foi enviado");
  }
}

const valida = new ValidaForm();
