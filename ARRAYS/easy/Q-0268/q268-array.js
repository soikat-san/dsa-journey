// LC Q268
// Missing Number

// Arithmetic Progression apprach:
var missingNumber = function (nums) {
  const n = nums.length;
  // Calculate the expected sum of numbers from 0 to n using the formula: n * (n + 1) / 2.
  const expectedSum = (n * (n + 1)) / 2;
  // Calculate the actual sum of the elements in the array.
  let actualSum = 0;
  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }
  // The missing number is the difference between the expected sum and the actual sum.
  return expectedSum - actualSum;
};

/**
 * Time Complexity: O(n)
The algorithm goes through the array once to compute the sum, which takes linear time.

 * Space Complexity: O(1)
Only a few extra variables are used, so the additional space is constant.
 */
