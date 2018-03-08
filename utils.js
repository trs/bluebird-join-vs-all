function sumAverage(values) {
  return values.reduce((avg, value) => value + avg, 0) / values.length
}

module.exports = {
  sumAverage
};
