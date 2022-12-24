function daysToXmas(date) {
  date = new Date(date);

  let dateChristmas = new Date('Dec 25, 2021');

  let result = dateChristmas.getTime() - date.getTime();

  let daysMS = 1000 * 60 * 60 * 24;

  return Math.ceil(result / daysMS);
}
