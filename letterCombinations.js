// const letterCombinations = (digits) => {
//   //edge case
//   if (digits == null || digits.length === 0) return [];
//   // define a map to use for each digit
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
//   // this is a result array and a function for iterating
//   const res = [];
//   const go = (i, s) => {
//     // if we have just added the last digit, we know one combination is complete
//     // so we push it to result
//     if (i === digits.length) {
//       res.push(s);
//       return;
//     }
//     // we begin a recursive call with i = 0
//     for (const c of map[digits[i]]) {
//       go(i + 1, s + c);
//     }
//   };

//   go(0, '');
//   return res;
// };

const combinations = [];
// i refers to the current index of digits

var letterCombinations = (digits, combo = '', i = 0) => {
  if (digits === null || !digits.length) { return [] }
  if (digits.length === i) {
    return combinations.push(combo);
  }
  for (let char of map[digits[i]]) {
    letterCombinations(digits, combo + char, i + 1);
  };
  return combinations;
};

console.log(letterCombinations('2'))