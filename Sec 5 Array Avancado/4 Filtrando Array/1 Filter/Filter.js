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
