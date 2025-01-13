/* function* geradora1() {
  // Código qualquer
  yield "Valor 1";
  // Código qualquer
  yield "Valor 2";
  // Código qualquer
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
*/

/* function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1.next().value);

for (let valor of g1) {
  console.log(valor);
} */

/* function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value); */

function* geradora3() {
  yield "Valor 0";
  yield "Valor 1";
  yield "Valor 2";
}

function* geradora4() {
  yield* geradora3();
  yield "Valor 3";
  yield "Valor 4";
  yield "Valor 5";
}

const g4 = geradora4();
// console.log(g4.next().value);
// for (let valor of g4) {
//   // for of é a mesma coisa que um foreach
//   console.log(valor);
// }
function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do return");
  };

  yield function () {
    console.log("Vim do y2");
  };
}

const geradora6 = geradora5();
const func1 = geradora6.next().value;
const func2 = geradora6.next().value;
const func3 = geradora6.next().value;
func1();
func2();
func3();
