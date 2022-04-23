function test(results) {
  let objectResult = {
    input: results,
    output: 0,
    explanation: ''
  };
  let player1 = 0;
  let player2 = 0;

  results.map((item) => {
    if (item === 1) player1 += 1;
    if (item === 2) player2 += 1;
  });

  if (player1 >= player2) {
    objectResult.output = player1;
    objectResult.explanation = `Player 1 won the match by winning ${player1} rounds`;
    console.log(objectResult);
  } else {
    objectResult.output = player2;
    objectResult.explanation = `Player 2 won the match by winning ${player2} rounds`;
    console.log(objectResult);
  }
}

test([1, 2, 2, 2, 2, 1]);
