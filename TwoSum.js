// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(1)
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)
const twoSumSolution2 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

// Solution 3
// Time Complexity: O(n)
// Space Complexity: O(n)
const twoSumSolution3 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};


// Tests
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
console.log(twoSumSolution2([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumSolution2([3, 2, 4], 6)); // [1,2]
console.log(twoSumSolution2([3, 3], 6)); // [0,1]
console.log(twoSumSolution3([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSumSolution3([3, 2, 4], 6)); // [1,2]
console.log(twoSumSolution3([3, 3], 6)); // [0,1]

