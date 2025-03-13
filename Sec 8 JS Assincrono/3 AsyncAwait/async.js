function rand(min = 0, max = 3) {
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

/* Este processamento é Síncrono pois o programa espera a função de cima executar para executar a próxima, Más não verdadeiramente porque
  a espera estamos causando com a função rand pra simular um tempo aleatório de execução de cada uma das funções */
// esperaAi("fase2", rand())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("fase2", rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi("fase3", rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return fase;
//   })
//   .then((fase) => {
//     console.log("Terminamos na fase: " + fase);
//   })
//   .catch((e) => console.log(e));

//Agora Usando as palavras Asyn e Await
