// LC Q628
// Maximum Product of Three Numbers

var maximumProduct = function (nums) {
  // Sort the array in non-decreasing order.
  nums.sort((a, b) => a - b);
  const n = nums.length;

  // Option 1: Product of the three largest numbers.
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // Option 2: Product of the two smallest numbers and the largest number.
  const product2 = nums[0] * nums[1] * nums[n - 1];

  // Return the maximum of the two products.
  return Math.max(product1, product2);
};

/**
 * Time Complexity: O(n log n)
	•	The sorting step takes O(n log n) time.
	•	The subsequent operations are O(1).
    
 * Space Complexity: O(1) (ignoring the input array)
	•	Sorting is done in-place and only a few extra variables are used.
 */
