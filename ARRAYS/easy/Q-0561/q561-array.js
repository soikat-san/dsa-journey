// LC Q561
// Array Partition

var arrayPairSum = function (nums) {
  // Sort the array in ascending order.
  nums.sort((a, b) => a - b);

  let sum = 0;
  // Sum every even-indexed element (0, 2, 4, ...).
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

/**
 * Time Complexity: O(n log n)
	•	The primary cost is the sorting step, which takes O(n log n) time.

 * Space Complexity: O(1) (ignoring the space used by the sorting algorithm)
	•	The solution uses only a constant amount of extra space.
	•	Note: Depending on the sorting algorithm used by JavaScript, additional space might be used internally, but the algorithm itself requires O(1) extra space for its logic.
 */
