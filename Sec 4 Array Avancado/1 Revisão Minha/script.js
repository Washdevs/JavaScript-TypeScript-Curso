// Arrays em JavaScript são usados para armazenar múltiplos valores em uma única variável.
// Eles são úteis para agrupar dados relacionados e podem conter qualquer tipo de dado,
// incluindo números, strings, objetos e até outros arrays.

// Criando Arrays
// Você pode criar um array usando colchetes [] ou o construtor Array.

// Usando colchetes
let frutas = ["Maçã", "Banana", "Laranja"];

// Usando o construtor Array
let numeros = new Array(1, 2, 3, 4, 5);

// Acessando Elementos
// Os elementos de um array são acessados usando índices, que começam em 0.
let primeiraFruta = frutas[0]; // "Maçã"
let segundaFruta = frutas[1]; // "Banana"

// Modificando Elementos
// Você pode modificar os elementos de um array atribuindo novos valores aos índices.
frutas[1] = "Morango"; // ["Maçã", "Morango", "Laranja"]

// Métodos Comuns de Arrays
// Aqui estão alguns métodos comuns que você pode usar com arrays:

// push(): Adiciona um ou mais elementos ao final do array.
frutas.push("Uva"); // ["Maçã", "Morango", "Laranja", "Uva"]

// pop(): Remove o último elemento do array.
frutas.pop(); // ["Maçã", "Morango", "Laranja"]

// shift(): Remove o primeiro elemento do array.
frutas.shift(); // ["Morango", "Laranja"]

// unshift(): Adiciona um ou mais elementos ao início do array.
frutas.unshift("Abacaxi"); // ["Abacaxi", "Morango", "Laranja"]

// length: Retorna o número de elementos no array.
let tamanho = frutas.length; // 3

// forEach(): Executa uma função para cada elemento do array.
frutas.forEach(function (fruta) {
  console.log(fruta);
});

// map(): Cria um novo array com os resultados de chamar uma função para cada elemento do array.
let frutasMaiusculas = frutas.map(function (fruta) {
  return fruta.toUpperCase();
});
console.log(frutasMaiusculas); // ["ABACAXI", "MORANGO", "LARANJA"]
