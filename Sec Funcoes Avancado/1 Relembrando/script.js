//Repassando o que aprendemos

//Declaração de função (Function hoisting)
function falaOi(){
    console.log('Oie');
} // criando a função e dando um trabalho a ela
falaOi(); // chamado a função

// First-class objects (Objetos de primeira classe) Significa que podemos tratar a função como um dado naturalmente
// Function expression
const souUmDado = function(){ // Esta também poderia ser uma função anonima porem não é por ter nome que é o nome da variável
    console.log('Sou um dado.')
}// a variavel recebeu a função como um dado e eu poso executar esta variavel como uma função normal
// souUmDado(); // Executando da mesma forma que a primeira declaração.

function executaFuncao(funcao){
    console.log('Vou executar a função abaixo')
    funcao();
}
executaFuncao(souUmDado); 
/* Você está passando a função souUmDado como argumento para a função executaFuncao.
Agora, dentro de executaFuncao, o parâmetro funcao representa a função souUmDado. Ou seja:
funcao não é um valor como um número ou texto.
funcao é a própria função souUmDado!
Parece complicado de entender mas é simples, a funcção executafunção apenas executa outra função
Se temos duas coisas para serem executadas ou verificações ao memso tempo em locais diferentes do sistema.
Podemos usufluir desta possibilidade de quando executar a nossa função pedir para que ela execute a outra função */

//Arrow function é ima Function expression bem curta

const funcaoArrow = () =>{
    console.log('sou uma arrow function')
}
funcaoArrow();

const obj = {
    falar(){
        console.log('Estou Falando...')
    },
    Bater(){
        console.log('Bati em alguem')
    }
}
obj.falar();
obj.Bater();

//Aqui usamos a conotação de ponto para usar a função desejada dentro deste obj