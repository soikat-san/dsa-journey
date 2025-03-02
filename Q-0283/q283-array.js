// LC Q283
// Move Zeroes

var moveZeroes = function (nums) {
  // Pointer for the position to place the next non-zero element.
  let lastNonZeroFoundAt = 0;

  // Move non-zero elements forward.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++;
    }
  }

  // After all non-zero elements have been moved forward, fill the remainder with zeros.
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/**
 * Time Complexity: O(n)
The array is traversed twice (once for moving non-zero elements and once for filling with zeros), resulting in linear time complexity.

 * Space Complexity: O(1)
The solution uses a constant amount of extra space regardless of the input size.
 */
