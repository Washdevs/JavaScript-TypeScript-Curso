// // Comparando os métodos:
// // Método	Retorna	Usado Para
// // filter	Novo array	Filtrar elementos com base em uma condição.
// // map	Novo array	Transformar elementos do array.
// // reduce	Único valor	Agregar valores do array em um único resultado.
// // Combinando os métodos:
// // Os métodos podem ser combinados para tarefas mais complexas:

// const numeros = [1, 2, 3, 4, 5, 6];
// const resultado = numeros
//   .filter((num) => num % 2 === 0) // Filtra números pares
//   .map((num) => num * 2) // Dobra os pares
//   .reduce((soma, num) => soma + num, 0); // Soma os resultados

// console.log(resultado); // 20 (2*2 + 4*2 + 6*2)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros
  .filter((num) => num % 2 === 0) // Filtrando números pares
  .map((num) => num * 2) // Dobrando os números pares
  .reduce((soma, num) => soma + num, 0); //
console.log(resultado); // 20 (2*2 + 4*2 + 6*2)

const pessoas = [
  { nome: "Maria", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "José", idade: 28 },
  { nome: "Antônio", idade: 35 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 40 }
];
// neste casp temos 1 array com vários objetos, cada objeto tem 2 propriedades, nome e idade.
const pessoasComNomeGrande = pessoas.filter((pessoa) => pessoa.nome.length <= 4);
console.log(pessoasComNomeGrande);
