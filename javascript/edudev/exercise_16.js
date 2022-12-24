function decodeNumbers(symbols) {
  const dataSymbolsValue = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  };

  let totalResult = 0;
  for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i];

    if (dataSymbolsValue[symbol] < dataSymbolsValue[symbols[i + 1]]) {
      totalResult -= dataSymbolsValue[symbol];
    } else {
      totalResult += dataSymbolsValue[symbol];
    }
  }

  return totalResult;
}

console.log('=================================');
console.log(decodeNumbers('...')); // 3
console.log(decodeNumbers('.,')); // 4 (5 - 1)
console.log(decodeNumbers(',.')); // 6 (5 + 1)
console.log(decodeNumbers(',...')); // 8 (5 + 3)
console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')); // 49 (50 - 1)
console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')); // 300
console.log(decodeNumbers(';!')); // 50
console.log(decodeNumbers(';.W')); // NaN

// function decodeNumbers(symbols) {
//   const values = {
//     '.': 1,
//     ',': 5,
//     ':': 10,
//     ';': 50,
//     '!': 100
//   };
//   let respuesta = 0;
//   [...symbols].forEach((_, index) => {
//     console.log(index);
//     if (values[symbols[index]] < values[symbols[index + 1]]) {
//       //console.log("if", symbols[index])
//       respuesta -= values[symbols[index]];
//       //console.log("if res", respuesta)
//     } else {
//       //console.log("else",symbols[index])
//       respuesta += values[symbols[index]];
//       //console.log("else res", respuesta)
//     }
//   });
//   return respuesta;
// }

// console.log(decodeNumbers('...')); // 3
// console.log(decodeNumbers('.,')); // 4 (5 - 1)
// console.log(decodeNumbers(',.')); // 6 (5 + 1)
// console.log(decodeNumbers(',...')); // 8 (5 + 3)
// console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
// console.log(decodeNumbers('.;')); // 49 (50 - 1)
// console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
// console.log(decodeNumbers('..,!')); // 95 (1 - 1 - 5 + 100)
// console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
// console.log(decodeNumbers('!!!')); // 300
// console.log(decodeNumbers(';!')); // 50
// console.log(decodeNumbers(';.W')); // NaN
