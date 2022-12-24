// function fixFiles(files) {
//   let newArray = [];
//   let items = {};
//   files.forEach((value) => {
//     if (!items.hasOwnProperty(value)) {
//       items[value] = 1;
//     } else {
//       items[value]++;
//     }
//   });

//   Object.entries(items).map((item) => {
//     for (let i = 0; i < item[1]; i++) {
//       const element = item[0];

//       if (newArray.includes(element)) {
//         newArray.push(`${element}(${i})`);
//       } else {
//         newArray.push(element);
//       }
//     }
//   });

//   return newArray;
// }

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
// console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

// const files2 = ['file', 'file', 'file', 'game', 'game'];
// console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
// const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
// console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

/////////////////////////////////////

function fixFiles(files) {
  const count = {};
  return files.reduce((acc, current) => {
    console.log(current);
    acc.push(acc.includes(current) ? `${current}(${count[current]})` : current);

    count[current] = (count[current] ?? 0) + 1;
    return acc;
  }, []);
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
