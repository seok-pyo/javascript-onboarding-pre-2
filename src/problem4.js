function problem4(word) {
  let answer = "";
  let CAP = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  let SMA = "abcdefghijklmnopqrstuvwxyz";
  let RE_CAP = CAP.split("").reverse().join("");
  let RE_SMA = SMA.split("").reverse().join("");
  for (let x of word) {
    if (CAP.includes(x)) {
      answer += RE_CAP[CAP.indexOf(x)];
    } else if (SMA.includes(x)) {
      answer += RE_SMA[SMA.indexOf(x)];
    } else answer += x;
  }
  return answer;
}

module.exports = problem4;
