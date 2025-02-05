//Esta foi a minha forma de fazer uma verificação de CPF

function formatarNumero(input) {
  let numero = input.value.replace(/\D/g, "");

  let formatado = "";
  for (let i = 0; i < numero.length; i++) {
    if (i > 0 && i % 3 === 0 && i < 9) {
      formatado += ".";
    }
    if (i === 9) {
      formatado += "-";
    }
    formatado += numero[i];
  }
  input.value = formatado;
}

function handleClick(callback) {
  let verificador = document.getElementById("inputText").value;
  let cpf = verificador.replace(/[.,\-: ]/g, "");

  if (cpf.length === 11) {
    console.log("CPF Digitado: " + cpf);
  } else {
    console.log("CPF Digitado Inválido por favor digite novamente.");
    callback();
    setTimeout(() => handleClick(callback), 1000); // Recursão com delay
  }
}

function handleClick1(callback) {
  let verificador = document.getElementById("inputText").value;
  let cpf = verificador.replace(/[.,\-: ]/g, "");

  if (cpf.length === 11) {
    console.log("CPF Digitado: " + cpf);
  } else {
    callback();
    setTimeout(() => handleClick(callback), 1000); // Recursão com delay
  }
}
