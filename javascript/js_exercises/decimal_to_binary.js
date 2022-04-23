let decimal = 2021;
let binario = '';

while (decimal > 0) {
  let resto = decimal % 2;
  binario = resto + binario;
  decimal = Math.floor(decimal / 2);
  console.log(binario);
}
