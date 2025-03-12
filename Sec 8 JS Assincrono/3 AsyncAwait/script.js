function rand(min = 0, max = 2) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Valor inválido");
        return;
      }
      resolve(msg.toUpperCase() + "- Passei na Promisse".toUpperCase());
      return;
    }, tempo);
  });
}

esperaAi("fase1", rand()).then((valor) => {
  console.log(valor);
  return esperaAi("fase2", rand()).then((valor) => {
    console.log(valor);
  });
});
