// function problem3(number) {
//   let arr = Array.from({ length: number }, (_, i) => ++i);
//   let reg = /[369]/;
//   return arr.filter((v) => reg.test(v));
// }

function problem3(number) {
  let arr = Array.from({ length: number }, (_, i) => ++i);
  let answer = 0;
  for (let x of arr.join("")) {
    if (x === "3" || x === "6" || x === "9") answer++;
  }
  return answer;
}

module.exports = problem3;
