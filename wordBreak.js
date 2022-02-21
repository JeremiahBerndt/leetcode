var wordBreak = function (s, wordDict) {
  // create wordsfound var
  const exists = (str1, str2) => {
    let l = str2.length;
    let cutStr = str1;
    if (str1.length < str2.length) {
      return false;
    }
    for (let i = 0; i <= str1.length - l; i++) {
      // console.log(cutStr, str1.substring(i, i + l), str2);
      if (cutStr.substring(i, i + l) === str2) {
        cutStr = cutStr.slice(0, i) + cutStr.slice(i + l)
      }
    }
    return cutStr;
  }
  // create inner recusive func
  const recurse = (s, wordDict, i) => {
    if (!wordDict.length || s === wordDict[i]) {
      return true;
    }
    let newStr = exists(s, wordDict[i]);
    if (newStr) {
      return recurse(newStr, wordDict, i + 1)
    } else {
      return false
    }
  }
  return recurse(s, wordDict, 0)
};
const word = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(word, wordDict))