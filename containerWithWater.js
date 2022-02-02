// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.
/*
I: height is an array of levels
O: a number of area of water
C: None
E: None
*/

var maxArea = function (height) {
  // create 2 pointers and a maxHeight
  let left = 0, right = height.length - 1, max = 0;
  // while left idx is less than right idx
  while (left < right) {
    // check if left height is less than right height, if true,
    if (height[left] < height[right]) {
      // increment left and calculate total area
      max = Math.max(max, height[left] * (right - left));
      left++;
    } else {
      // decrement right and calculate total area
      max = Math.max(max, height[right] * (right - left));
      right--;
    }
  }
  //return maxArea
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 8, 7]))