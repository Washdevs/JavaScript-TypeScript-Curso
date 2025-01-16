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

// function funcao(a,b = 2, c = 1){ // Forma moderna 
//     console.log(a + b + c)
// }
// funcao(2, undefined, 2) // não posso entregar valor vazio ao parametro mas posso dar undefined que ele assumirá apenas o valor do parametro
// Se usar null ele assume o null como zero 0
// O valor do argumento é o priorizado enquanto o do parâmetro é apenas um valor padrão


// function funcao({nome, sobrenome, idade}){ //Isto é desestruturação
//     console.log(nome, sobrenome, idade)
// }
// funcao({nome:'Lucas', sobrenome:'Otávio', idade:20}); // Os argumentos são os dados passados para os parametros //desta forma é chamada de valor literal
// mandar o objeto direto como {nome:'Lucas', sobrenome:'Otávio', idade:20} funciona da mesma forma que let objeto = {nome:'Lucas', sobrenome:'Otávio', idade:20} funcao(objeto)

// function funcao([valor1, valor2, valor3]){ //Isto é desestruturação
//     console.log(valor1, valor2, valor3)
// }
// funcao(['Luiz', 'Miranda', 30]);

// function funcao(operador, acumulador, ...numeros){ //... Rest operator o resto dos argumentos ficam dentro de um array, e o Rest deve ser o ultimo parametro 
//     for(let num of numeros){ //Diferenças entre os For, For in é indice, For of é os valores, foreach numeros.forEach((numero, indice)
//     if(operador === '+')acumulador += num;
//     else if(operador === '-')acumulador -= num;
//     else if(operador === '/')acumulador /= num;
//       else if(operador === '*')acumulador *= num;
//     }
// //     console.log(acumulador)
// }
// funcao('*', 0, 20, 30, 40, 50);

// const conta = (...args) => { // usando rest operator é a mesma coisa de usar arguments pois arguments não é possível se for arrow function
//     console.log(args)
// }
// conta('*', 0, 20, 30, 40, 50);

const conta = (...args) => { // usando rest operator é a mesma coisa de usar arguments pois arguments não é possível se for arrow function
    console.log(args)
}
conta('*', 0, 20, 30, 40, 50);