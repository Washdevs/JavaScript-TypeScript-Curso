function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Cheguei", rand(1, 5))
  .then((resposta) => {
    //.then é chamado quando a promisse é resolvida, then significa "então"s
    console.log(resposta);
    return esperaAi("Segundo Passo CallBack ", rand(1, 3)); //da para retornar a função novamente como CallBack
  })
  .then((resposta) => {
    return resposta + "Vai pro próximo then"; //Retornando o valor do then acima e concatenando com a string
  })
  .then((resposta) => {
    console.log(resposta); //é quem imprime o valor do return de cima
    return esperaAi("Terceiro Passo CallBack ", rand(1, 9)); //retorna a função com os valores
  })
  .then((resposta) => {
    console.log(resposta); //mostra o valor do return de cima
  })
  .then((erros, resposta) => {
    console.log("Ultimo then"); //mostra o valor do return de cima
  })
  .catch((error) => {
    console.error("Erro", error);
  });

//Passso a passo é funcção executa Cheguei então recebe uma arrow que retorna o valor da função esperaAi
//e assim por diante, até o .catch que é chamado quando a promisse é rejeitada

// a lógica é a mesma do CallBack, porém com a sintaxe mais limpa e fácil de entender
// o .then é chamado quando a promisse é resolvida
// o .catch é chamado quando a promisse é rejeitada
// o .finally é chamado independente de ser resolvida ou rejeitada
