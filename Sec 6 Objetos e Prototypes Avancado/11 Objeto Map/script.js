const pessoas = [
  { id: 3, nome: "wash" },
  { id: 2, nome: "well" },
  { id: 1, nome: "will" }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }
// console.log(novasPessoas);

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}
console.log(novasPessoas); //VEJO TODAS AS CHAVES E VALORES DO MAP
console.log("ID 2 é: ");
console.log(novasPessoas.get(2)); //VEJO APENAS O ID 2
console.log("Existe ID 4? " + novasPessoas.has(4)); //VERIFICA SE EXISTE O ID 4
console.log("Qual tamanho do MAP? " + novasPessoas.size); //VERIFICA O TAMANHO DO MAP
console.log("Deletei o ID2: " + novasPessoas.delete(2)); //DELETA O ID 2
console.log("Qual o tamanho atual? " + novasPessoas.size); //VERIFICA O TAMANHO DO MAP
//novasPessoas.clear(); //LIMPA O MAP
console.log("Limpei o MAP ");
console.log("Qual o novo tamanho? " + novasPessoas.size); //VERIFICA O TAMANHO DO MAP

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
} //Destruindo o MAP e pegando os valores, isso faz com que o objeto deixe de aparecer e nos vamos extraindo os calores do MAP

for (const pessoa of novasPessoas.keys()) {
  //.values me retorna os valores de objeto
  console.log(pessoa);
} //É mais facil fazer com o objeto inteiro pois podemso fazer oque quiser com ele
