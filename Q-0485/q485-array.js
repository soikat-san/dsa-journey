// LC Q485
// Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0; // To store the maximum count of consecutive ones found so far.
  let count = 0; // To count the current streak of consecutive ones.

  // Iterate through the array.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      // If the element is 1, increment the current streak counter.
      count++;
    } else {
      // If a 0 is encountered, update maxCount if needed and reset the current streak counter.
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }

  // After the loop, check one more time to handle the case where the array ends with a 1.
  return Math.max(maxCount, count);
};

/**
 * Time Complexity: O(n)
The algorithm makes one pass through the array, processing each element once.

 * Space Complexity: O(1)
Only a constant amount of extra space is used (two integer variables).
 */
