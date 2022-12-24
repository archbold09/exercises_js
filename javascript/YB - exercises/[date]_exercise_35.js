// Ejercicio 35: Validar si una Variable es de Tipo Date

let x = new Date();
let y = 'string';
let z = 1.2;

if (x instanceof Date) {
  console.log('Var X is type Date');
} else {
  console.log('Var X is not type Date');
}

if (z instanceof Date) {
  console.log('Var Z is type Date');
} else {
  console.log('Var Z is not type Date');
}

if (y instanceof Date) {
  console.log('Var X is type Date');
} else {
  console.log('Var X is not type Date');
}
