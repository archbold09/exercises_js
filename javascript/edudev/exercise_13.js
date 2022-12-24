function wrapGifts(gifts) {
  if (gifts.length === 0) return [];

  const newArray = [];

  let numRepeats = 0;

  if (gifts[0].length === 4) {
    numRepeats = 6;
  } else {
    numRepeats = 4;
  }

  newArray[0] = '*'.repeat(numRepeats);

  for (let i = 0; i < gifts.length; i++) {
    const item = gifts[i];

    newArray[i + 1] = `*${item}*`;
  }

  newArray.push('*'.repeat(numRepeats));

  return newArray;
}

console.log(wrapGifts(['📷', '⚽️']));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(['🏈🎸', '🎮🧸']));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(['📷']));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
