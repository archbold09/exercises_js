// Ejercicio 32: Crear una Fecha por Medio del Objeto Date

console.log('Compare dates');
let today = new Date().getTime();
let myBirthday = new Date('October, 01 2022').getTime();

let daysMS = 1000 * 60 * 60 * 24;

let result = myBirthday - today;

console.info(result.valueOf());

console.info('Days to my birthday: ' + Math.ceil(result / daysMS));

// let date = new Date('Mayo 3, 2022 03:17');

// console.log(date);

// date = new Date(2022, 05, 3);

// console.log(date);

console.log('Set new dates');

let stringDate = 'May 03, 2022 12:00:00';

let dateString = new Date(stringDate);

console.log(dateString);

dateString.setMonth(9);

console.log(dateString);
