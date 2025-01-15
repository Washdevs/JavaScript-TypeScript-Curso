const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num4 = [7, 8, 9];

const num3 = num1.concat(num2, num4); //num 1 concatena com num 2
// const num3 = num1.concat(num2, [1,2,3] 'Luiz'); // Outra formam, um array literal e uma string
// const num3 = num1.concat(num2, [1, 2, 3], "Luiz");
console.log(num3);

// rest operator ou spread operator = const num3 = num1.concat(num2, [1, 2, 3], "Luiz")
// Serve tanto para array quanto para objetos a diferneça é um usando Chaves e o outro colchetes
const a3 = [...num1, "Lulu", ...num2, ...num4, 10, 11, 12, "Lulu"];
console.log(a3);
