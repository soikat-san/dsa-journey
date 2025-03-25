// LC Q169
// Majority Element

// Boyer-Moore Voting Process:
var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  // Iterate through the array to find the candidate for majority element.
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Since the problem guarantees that a majority element exists,
  // candidate will be the majority element.
  return candidate;
};

/**
 * Time Complexity: O(n)
The algorithm makes a single pass through the array, so the time complexity is linear.

 * Space Complexity: O(1)
Only a constant amount of extra space is used (two variables: candidate and count).
 */
