function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    //oque diz se ela é uma promessa
    if (typeof msg !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase());
    }, tempo);
  });
}
//promisse.resolve = return um resolve com uma string para a função dizendo que resolveu
//promisse.reject = mesma coisa porem reject ai no caso se tiver algo como true que eu não quero retorna reject

function baixaPagina() {
  let emCache = false;
  if (emCache) {
    return Promise.resolve("Página em Cache");
  } else {
    return esperaAi("Baixei a página", 2000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

//promisse.all = Retorna todas as promises
//promisse.race = Retorna a primeira que for resolvida

// const promisse = [
//   "Primeiro Valor",
//   esperaAi("Primero", 3000),
//   esperaAi("Segundo", 800),
//   esperaAi("Terceiro", 1000),
//   "Outro"
// ];

// Promise.race(promisse)
//   .then((valor) => {
//     s;
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log("Erro: " + e);
//   });
