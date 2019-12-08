/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == nums.length - 1) {
      break;
    }

    for (let z = i + 1; z < nums.length; z++) {
      if (nums[i] + nums[z] == target) {
        indices.push(i);
        indices.push(z);
        break;
      }
    }
  }

  return indices;
};

console.log(twoSum([1, 2, 34, 56, 32, 3, 45, 16], 17));
