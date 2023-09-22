function problem2(cryptogram) {
  let g = /(\w)\1/g;
  while (cryptogram.match(g)) {
    cryptogram = cryptogram.replace(g, "");
  }
  return cryptogram;
}

module.exports = problem2;
