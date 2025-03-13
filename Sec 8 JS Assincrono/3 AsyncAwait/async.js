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

async function fasedojogo() {
  try {
    const fase1 = await esperaAi("Fase 1 ", rand());
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2 ", rand());
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);
    console.log("Terminamos na Fase: ", fase3);
  } catch (e) {
    console.log(e); // Se der erro ele vai para o catch então ele para a execução e mostra o erro
  }
}
//Async permite usarmos a palavra await para esperar e promisse ser finalizada
fasedojogo();

/*Promisse tem 3 estados
Pendente = Promise { <pending> }
fullfield = Resolvida
rejected = rejeitada
*/
