/*
 * @param {number[]} nums
 * @return {number[]}
 *
 * O: an array of nums
 * I: an array of nums
 * C: runs in O(n) time no division operator
 * E: none
 *
 *
 *
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let forward = [];
  let reversed = [];
  let combined = [];
  // let currentTotal = 1;
  forward[0] = 1
  reversed[len - 1] = 1
  for (let i = 1; i < len; i++) {
    forward[i] = nums[i - 1] * forward[i - 1];
    reversed[len - i - 1] = nums[len - i] * reversed[len - i]
  }
  console.log(reversed, forward)
  for (let i = 0; i < len; i++) {
    combined[i] = forward[i] * reversed[i];
  }
  return combined;
};

console.log(productExceptSelf([2, 2, 3, 4]))