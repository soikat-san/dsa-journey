// LC Q674
// Longest Continuous Increasing Subsequence

var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0;

  let maxLength = 1; // Maximum length found so far.
  let currentLength = 1; // Length of the current increasing subsequence.

  // Iterate through the array starting from the second element.
  for (let i = 1; i < nums.length; i++) {
    // If the current number is greater than the previous one, it's part of an increasing subsequence.
    if (nums[i] > nums[i - 1]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      // Otherwise, reset the current length.
      currentLength = 1;
    }
  }

  return maxLength;
};

/**
 * Time Complexity: O(n)
	•	The algorithm makes a single pass through the array, processing each element once.

 * Space Complexity: O(1)
	•	Only a constant amount of extra space is used for tracking counters.
 */
