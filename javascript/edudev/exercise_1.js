const sheep = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
];

const checkLetters = (str) => {
  str = str.toLowerCase();
  return str.includes('a') && str.includes('n');
};

const filterSheep = sheep.filter((item) => item.color === 'rojo' && checkLetters(item.name));

//
// && checkLetters(item.name)

console.log(filterSheep);
