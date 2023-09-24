function problem6(forms) {
  let answer = [];
  let pattern = [];
  let same_words = new Set();
  for (let form of forms) {
    pattern.push(...new Set(MAKE_PATTERN(form[1])));
  }
  for (let x of pattern) {
    if (pattern.indexOf(x) !== pattern.lastIndexOf(x)) same_words.add(x);
  }
  for (let [email, nick_name] of forms) {
    if (CHECKER(same_words, nick_name)) answer.push(email);
  }
  return answer.sort();
}

const MAKE_PATTERN = (nick_name) => {
  let result = [];
  for (let i = 0; i < nick_name.length - 1; i++) {
    result.push(nick_name.substring(i, i + 2));
  }
  return result;
};

const CHECKER = (same_words, nick_name) => {
  for (let x of same_words) {
    if (nick_name.includes(x)) return true;
  }
};

module.exports = problem6;
