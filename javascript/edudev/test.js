for (let i = 0; i < 10; i++) {
  let sumMiliseconds = i * 1000;
  const smsBulk = `test ${i}`;
  setTimeout(() => console.log(smsBulk), sumMiliseconds);
}
