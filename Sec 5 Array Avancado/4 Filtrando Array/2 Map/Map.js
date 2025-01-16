// // Comparando os métodos:
// // Método	Retorna	Usado Para
// // filter	Novo array	Filtrar elementos com base em uma condição.
// // map	Novo array	Transformar elementos do array.
// // reduce	Único valor	Agregar valores do array em um único resultado.
// // Combinando os métodos:
// // Os métodos podem ser combinados para tarefas mais complexas:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros.map((num) => num * 2); // Dobrando os números pares

console.log(resultado); // 20 (2*2 + 4*2 + 6*2)
