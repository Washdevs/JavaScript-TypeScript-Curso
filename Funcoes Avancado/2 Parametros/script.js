/* function funcao(){
    console.log(arguments[0])
}                       
funcao('valor',1,2,3,4); 
*/

//arguments é um objeto padrão do js que contem todos os argumentos passado como parametros para a função
//E funciona como array podendo acessar cada argumento separado por virgula em seu indice
// valores de argumentos podem ou não ser passados pois js não se importa com isso

//argumentos que sustenta todos os argumentos enviados
//function funcao(a,b,c){ //podemos ou não passar parametros para a função
//    let total = 0;
//    for (let argumento of arguments){ //arguments só funciona se a função for definida com a palavra function 
//        total += argumento
//    }
//    console.log(total, a,b,c)
//}                       
//funcao(1,2,3,4); //Podemos enviar argumentos para a função

/* function funcao(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}
funcao(1,2,3)

quando o num de argumentos for diferente do numero de parametros ele não da erro apenas aplica o valor padrão
nos argumentos que não existem como undefined */

/*Forma antiga 
function funcao(a,b){
    b = b || 0; //b tem algum valor? se não é 0 valor padrão + o argumento no caso resultado é 2
    console.log(a + b)
}
funcao(2) // qaundo o valor não é uma conta válida ele da NaN
*/

function funcao(a,b = 2){ // Forma moderna 
    console.log(a + b)
}
funcao(2, undefined) // não posso entregar valor vazio ao parametro mas posso dar undefined que ele assumirá apenas o valor do parametro