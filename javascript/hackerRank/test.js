const message = 'abaabbbc';

// const letters = {};

// message.split('').forEach((item) => {
//   if (letters.hasOwnProperty(item)) {
//     letters[item]++;
//   } else {
//     letters[item] = 1;
//   }
// });

// let newString = [];
// Object.keys(letters).forEach((item) => {
//   if (letters[item] !== 1) {
//     newString.push(letters[item]);
//   } else {
//     newString.push(item);
//   }
// });

// console.log(newString.join(''));

const array = message.split('');
const newArray = [];
let count = 1;
for (let i = 0; i < array.length; i++) {
  const a = array[i];
  const b = array[i + 1];

  if (a === b) {
    newArray.push(count);
    count++;
  } else {
    if (count === 1) {
      newArray.push(a);
    }
    count = 1;
  }

  console.log(a, b);
}
console.log(newArray);

const num = {
  lol: 'asd',
  lol: 'asd'
};

console.log(num);
