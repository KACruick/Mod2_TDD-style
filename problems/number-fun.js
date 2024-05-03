function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if(n < 1 || (n > 1000000)){
    throw new RangeError('Must be between 1 and 1,000,000')
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
