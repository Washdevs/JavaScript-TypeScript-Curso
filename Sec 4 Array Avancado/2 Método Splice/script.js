const nome = ["Mancha", "Bruto", "King", "Cartucho", "Bala", "Cromo"];

console.log(nome[2]);

nome.splice(2, 1, "Cachorro", "Gato", "Papagaio");
//nome.splice(Posicao, Quantidade de elementos a serem removidos, Elementos a serem adicionados);
// acima para positivos e para negativos o mesmo conceito, mas a contagem é feita de trás para frente.
// Exemplo: nome.splice(-1, 1, "Cachorro", "Gato", "Papagaio"); // adiciona no final do array
console.log(nome);
