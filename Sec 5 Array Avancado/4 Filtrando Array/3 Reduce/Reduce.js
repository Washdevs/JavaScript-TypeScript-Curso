// // Comparando os métodos:
// // Método	Retorna	Usado Para
// // filter	Novo array	Filtrar elementos com base em uma condição.
// // map	Novo array	Transformar elementos do array.
// // reduce	Único valor	Agregar valores do array em um único resultado.
// // Combinando os métodos:
// // Os métodos podem ser combinados para tarefas mais complexas:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros.reduce((soma, num) => soma + num, 0); //o acumulador q no caso é o soma, começa com 0
// 0+1=1, 0+2=2, 0+3=3, 0+4=4, 0+5=5, 0+6=6, 0+7=7, 0+8=8, 0+9=9, 0+10=10 = 55

console.log(resultado);
