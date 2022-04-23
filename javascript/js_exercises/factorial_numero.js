/*
    @@
      Obtener el factorial de un numero
    @@
*/

function getFactorial(num) {
  let result = 1;

  if (num === 0) return result;

  for (let i = num; i > 0; i--) {
    console.log(i);
    result = result * i;
  }

  if (result % 2 === 0) return result;

  return 0;
}

console.log(getFactorial(3));
