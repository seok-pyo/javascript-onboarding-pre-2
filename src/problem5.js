function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];
  for (const unit of units) {
    const count = Math.floor(money / unit);
    money %= unit;
    result.push(count);
  }
  return result;
}

module.exports = problem5;
