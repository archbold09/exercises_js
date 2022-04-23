// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌

function isValid(letter) {
  const open = [...letter].filter((l) => l === '(').length;
  const close = [...letter].filter((l) => l === ')').length;
  const empty = letter.replace('()', '').trim();
  const key = [...letter].filter((l) => l === '{').length;
  const sb = [...letter].filter((l) => l === '[').length;
  if (letter.length > empty.length || letter[0] === ')' || open !== close || key || sb) {
    return false;
  }
  return true;
}

// console.log(isValid('bici coche (balón) bici coche peluche'));
// console.log(isValid('bici coche (balón bici [) ( asd []{)  coche'));
console.log(isValid('bici (asdfasdfasdf )  (asdfasfdasdf() ('));
