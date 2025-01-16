//Função recursiva ela mesmo se chama:
function recursiva(max) {
  if (max > 10) return;
  max++;
  console.log(max);
  recursiva(max); //Ela executa o código e se chama de volta com o parâmetro dela
}
recursiva(-10);

//Recursividade é quando uma função chama a si mesma para resolver um problema menor ou mais simples, até chegar a uma condição que para o ciclo (chamada de caso base).
// Resumo:
// Recursividade = Uma função que chama ela mesma.
// Caso base = O ponto onde a função para.
// É útil para problemas como calcular fatorial, Fibonacci, ou navegar por estruturas como árvores.
