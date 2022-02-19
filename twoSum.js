var twoSum = function (nums, target) {
  let remainderMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (remainderMap.has(nums[i])) {
      return [remainderMap.get(nums[i]), i];
    } else {
      remainderMap.set(target - nums[i], i)
    }
  }
  return [];
};