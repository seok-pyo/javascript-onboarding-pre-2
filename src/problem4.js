// function problem4(word) {
//   let answer = "";
//   let CAP = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
//   let SMA = "abcdefghijklmnopqrstuvwxyz";
//   let RE_CAP = CAP.split("").reverse().join("");
//   let RE_SMA = SMA.split("").reverse().join("");
//   for (let x of word) {
//     if (CAP.includes(x)) {
//       answer += RE_CAP[CAP.indexOf(x)];
//     } else if (SMA.includes(x)) {
//       answer += RE_SMA[SMA.indexOf(x)];
//     } else answer += x;
//   }
//   return answer;
// }

function problem4(word) {
  let answer = "";
  for (let x of word) {
    if (65 <= x.charCodeAt() && x.charCodeAt() <= 90) {
      answer += String.fromCharCode(90 - x.charCodeAt() + 65);
    } else if (97 <= x.charCodeAt() && x.charCodeAt() <= 122) {
      answer += String.fromCharCode(122 - x.charCodeAt() + 97);
    } else answer += x;
  }
  return answer;
}

module.exports = problem4;
