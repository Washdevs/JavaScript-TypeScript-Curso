class ValidaForm {
  constructor() {
    this.form = document.querySelector(".formulario");
    // this.cpfInput = this.form.querySelector(".cpf");
    // this.tooltip = document.getElementById("tooltip");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const CamposValidos = this.camposValidos();
    const senhasValidas = this.validarSenhas();
    if (CamposValidos && senhasValidas) {
      alert("Formulário Enviado");
      this.form.submit();
    }
  }

  validarSenhas() {
    let valid = true;
    const senha = this.form.querySelector(".senha");
    const repetirSenha = this.form.querySelector(".repetir-senha");
    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.createError(senha, `Campos Senha e Repetir senha precisam ser iguais`);
      this.createError(repetirSenha, `Campos Senha e Repetir senha precisam ser iguais`);
    }
    if (senha.value.lenght < 6 || senha.value.lenght > 12) {
      valid = false;
      this.createError(senha, `Campo Senha precisa conter entre 6 e 12 Caracteres`);
    }
    return valid;
  }

  camposValidos() {
    let valido = true;
    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }
    for (let campo of this.form.querySelectorAll(".validar")) {
      let label = campo.previousElementSibling.innerText; // previusElementSibling pega o elemento anterior ao campo.
      //pra cada campo com a classe validar ferifica se tem value
      if (!campo.value) {
        this.createError(campo, `Campo ${label} não pode estar vazio.`);
        valido = false;
      }
      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valido = false;
      }
      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valido = false;
      }
    }
    return valido;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.lenght < 3 || usuario.lenght > 12) {
      this.createError(campo, "Usuário deve estar entre 3 e 12 Caracteres");
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campo, "Usuário deve conter letras e números");
      valid = false;
    }
    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.validacpf()) {
      this.createError(campo, "CPF Inválido");
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg; // insere a mensagem de erro no div criado
    div.classList.add("error-text"); // adiciona a classe error-text no div criado
    campo.insertAdjacentElement("afterend", div); // insere o div criado após o campo
  } //então embaixo de cada campo vai ter uma div nova com a mensagem de erro
}
const valida = new ValidaForm();
// 742.954.720-69
