'user strict';

function listGifts(letter) {
  const note = letter;
  const arrayProducts = {};

  note
    .split(' ')
    .filter((item) => !item.includes('_'))
    .map((item) => {
      if (item !== '') {
        if (item in arrayProducts) {
          arrayProducts[item] += 1;
        } else {
          arrayProducts[item] = 1;
        }
      }
    });

  return arrayProducts;
}

const gifts = listGifts(' bici  coche  balón  _playstation  bici  coche peluche');

console.log(gifts);
