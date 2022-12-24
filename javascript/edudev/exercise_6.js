// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

// La función debe devolver los dos valores del Array que sumen el resultado esperado.
// Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la
// izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

// Si no se encuentra, se devuelve null.

// El resultado tiene que ser un array con dos números.

// Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que
// recorrer las mismas situaciones dos veces 🤔?

// function sumPairs(numbers, result) {
//   let num1 = 0;
//   let num2 = 0;
//   let finalResult = 0;

//   num1 = numbers[0];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     num2 = numbers[i + 1];

//     if (num1 + num2 === result) {
//       finalResult = [num1, num2];
//     }
//   }

//   if (finalResult === 0) {
//     finalResult = null;
//   }

//   return finalResult;
// }

function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
