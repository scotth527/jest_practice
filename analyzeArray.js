function analyze(array) {
  let total = 0;
  for(i=0; i<array.length; i++) {
    total += array[i];
  }
  return {
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    average: total/array.length,
    sum: total
  }
};

module.exports = analyze;
