/*
oque já vimos até aqui:
objetct.keys (mostra as chaves do objeto)
object.freeze (congela o objeto)
object.defineProperty (define uma propriedade) aulas anteriores
object.defineProperties (define várias propriedades) aulas anteriores
*/

const produto = {
  nome: "Caneca",
  preco: 12
};
/* 
const outraCoisa = { ...produto }; // utilizando rest"spread" operator nós copiamos o objeto e não 
apontamos para ele como antes então agora outracoisa copia o objeto e altera da forma que quer
*/
const outraCoisa = {
  ...produto,
  material: "Porcelana"
};
/* 
E alé do mais podemos adicionar chaves pois é só uma cópia e não uma referencia
não está alterando nada em produto apenas usando as mesmas chaves 
*/

outraCoisa.nome = "Xicara";
outraCoisa.preco = 15;

console.log(outraCoisa);
console.log(produto);

// ---------------------- //

const produt = {
  nome: "Caneca",
  preco: 12
};

const outraCois = Object.assign({}, produt, { material: "pocelana" }); // mesmo que o de cima ele copia para o objeto onde esta vazio {} de produt, {o que quisermos adicionar}

outraCois.nome = "Xicara";
outraCois.preco = 15;

console.log(outraCois);
console.log(produt);

// --------------------- //

const product = {
  nome: "Caneca",
  preco: 12
};

const outraCoiss = {
  nome: product.nome,
  preco: product.preco
}; /*Existe essa forma bem manual mas é a pior possível porém 
é bom quando queremos pegar só uma propriedade de outro objeto */

outraCoiss.nome = "Xicara";
outraCoiss.preco = 15;

console.log(outraCoiss);
console.log(product);

// --------------------- //

const prod = {
  nome: "Caneca",
  preco: 12
};

Object.defineProperty(prod, "nome", { writable: false, configurable: false }); // Por padrão tudo é TRUE
console.log(Object.getOwnPropertyDescriptor(prod, "nome")); // Vemso as configs de defineProperty dela
console.log(Object.getOwnPropertyNames(prod)); // vemos os nomes das chaves deste objeto
prod.nome = "Mesa"; // Não é alterado
prod.preco = 23; // É alterado por estar padrão
console.log(prod);

// Value mostra o valor, keys mostra as chaves
console.log(Object.entries(prod)); // e entries mostra os dois em um array para cada

console.log("-------------------");

for (let [chave, valor] of Object.entries(prod)) {
  // [chave, valor] esta pegando o primerio e o segundo valor que vai ser retornado no array
  console.log(chave, valor);
  console.log(chave[0], valor[1]); // também é possível desta froma se no for tivesse apenas let valor por exemplo
} //isso é desestruturação q é expressão do js que peermite extrair dados de array ou objeto em variáveis
