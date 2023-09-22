function problem1(pobi, crong) {
  if (!check(pobi) || !check(crong)) return -1;
  let POBI_MAX = Math.max(...sum(pobi), ...multiply(pobi));
  let CRONG_MAX = Math.max(...sum(crong), ...multiply(crong));
  if (POBI_MAX > CRONG_MAX) return 1;
  else if (POBI_MAX < CRONG_MAX) return 2;
  else return 0;
}

const sum = (arr) => {
  return arr.map((v) =>
    String(v)
      .split("")
      .reduce((a, c) => Math.floor(a) + Math.floor(c), 0)
  );
};

const multiply = (arr) => {
  return arr.map((v) =>
    String(v)
      .split("")
      .reduce((a, c) => Math.floor(a) * Math.floor(c))
  );
};

const check = (arr) => {
  if (arr[1] - arr[0] === 1) return 1;
  // 예외 케이스 추가
};

module.exports = problem1;
