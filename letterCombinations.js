const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

const letterCombinations = (digits) => {
  //edge case
  if (digits == null || digits.length === 0) return [];
  // define a map to use for each digit
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  // this is a result array and a function for iterating
  const res = [];
  const go = (i, s) => {
    // if we have just added the last digit, we know one combination is complete
    // so we push it to result
    if (i === digits.length) {
      res.push(s);
      return;
    }
    // we begin a recursive call with i = 0
    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, '');
  return res;
};

// const combinations = [];

// var letterCombinations = function (digits, combo = '') {
//   // [a, b, c] => [d, e, f]
//   if (digits.length === 0) {
//     combinations.push(combo);
//     return;
//   }
//   for (let i = 0; i < digits.length; i++) {
//     // each number from the digits
//     let letters = map[digits[i]];
//     letters.forEach(letter => {
//       //each letter associated with 1 digit
//       combo += letter;
//       letterCombinations(digits.substring(1), combo)
//       combo = combo.substring(0, combo.length - 1)
//     })
//   }
//   return combinations;
// };

console.log(letterCombinations('257'))