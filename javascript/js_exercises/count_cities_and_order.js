// contar ciudades y mostrar las 5 que mas aparecen

const arrayCities = ['Tumba', 'Tumba', 'Tumba', 'Tumba', 'Tumba', 'Vårgårda', 'Gingsir', 'Gingsir', 'Guazacapán', 'Baligród', 'Ubaitaba', 'Włosienica', 'Granada', 'Sajia', 'Rosthern', 'Gingsir', 'Tumba', 'Vårgårda', 'Vårgårda', 'Guazacapán', 'Baligród', 'Ubaitaba', 'Włosienica', 'Granada', 'Sajia', 'Rosthern', 'Gingsir', 'Tumba', 'Vårgårda', 'Włosienica', 'Granada', 'Sajia', 'Rosthern', 'Tumba', 'Vårgårda'];
//

function logMostOcurrencesCities(numCities) {
  const cities = {};

  arrayCities.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });
  return Object.keys(cities)
    .map((city) => ({ name: city, times: cities[city] }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map((city) => city.name);
}

console.log(logMostOcurrencesCities(3));
