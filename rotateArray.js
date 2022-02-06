// rotateLeft
const rotateLeft = (arr, count = 1) => {
  return arr.slice(count, arr.length).concat(arr.slice(0, count));
};

// rotateRight
function rotateRight(arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  let leftSide = arr.slice(0, arr.length - count)
  let rightSide = arr.slice(arr.length - count)
  return rightSide.concat(leftSide);
  // return arr;
}

const arr = [1, 2, 3, 4, 5];

console.log(rotateRight(arr, 11));  // [2, 3, 4, 5, 1]