//Funções IIFE ou Funções imediatas
// Função imediata que é criada e invocada imediatamente sem dar nome a ela, e ela não toca o escopo global
// a variável dentro dela pode ter o mesmo nome de uma de fora que ela não irá interferir ambas terão valores
// diferentes

// (function (params) {
//   const nome = 'luiz';
//   console.log(nome);
// })();

// const nome = 'luizaaaa';
// console.log(nome);

// IIFE
// (function (idade, peso, altura) {
//   const sobreNome = 'Miranda';
//   function criaNome(nome) {
//     return nome + ' ' + sobreNome;
//   }
//   function falaNome() {
//     console.log(criaNome('Luiz'));
//   }
//   falaNome();
//   console.log(idade, peso, altura);
// })(30, 78, 190);

// const nome = 'luizaaaa';
// console.log(nome);
