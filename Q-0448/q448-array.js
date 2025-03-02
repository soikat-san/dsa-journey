// LC Q448
// Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function (nums) {
  // Mark each number's corresponding index as negative to indicate that the number exists.
  for (let i = 0; i < nums.length; i++) {
    // Compute the index corresponding to the value, using absolute value in case it's already marked.
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  // The indices with positive values correspond to missing numbers.
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

/**
 * Time Complexity: O(n)
The algorithm makes two passes through the array: one for marking and one for collecting the missing numbers.

 * Space Complexity: O(1)
The solution uses only a constant amount of extra space (aside from the output array), modifying the input array in-place.
 */
