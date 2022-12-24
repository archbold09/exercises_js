'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = [];

var salida = '';
var c = array.sort((a, b) => {
  // console.log(a - b);
  salida += '(a: ' + a + ', b: ' + b + ', a-b: ' + (a - b) + ')\n';
  return a - b;
});
// console.log(salida);

// console.log(c);

let cambio;

for (let i = 0; i < array.length; i++) {
  let index1 = i;
  let index2 = i - 1;
  console.log(index1, index2);

  do {
    console.log('-------------------------');
    cambio = false;
    if (index2 >= 0) {
      numero1 = this[index1];
      numero2 = this[index2];
      console.log('Comparando ' + numero1 + ' vs ', numero2);
      resultado = funcComparar(numero1, numero2);
      console.log('Resultado de la comparacion : ', resultado);
      if (resultado > 0) {
        console.log('Resultado > 0, Se cambia el orden');
        this[index2] = numero1;
        this[index1] = numero2;
        cambio = true;
      } else console.log('Resultado <= 0, Orden se mantiene ');
      index1--;
      index2--;
    }
    console.log(this);
  } while (cambio);
}

console.log(array);
