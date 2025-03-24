// LC Q303
// Range Sum Query - Immutable

class NumArray {
  constructor(nums) {
    // Create a prefix sum array with an extra element at the beginning (0)
    this.prefix = new Array(nums.length + 1).fill(0);

    // Build the prefix sum array where prefix[i+1] = prefix[i] + nums[i]
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }
  sumRange(i, j) {
    // The sum for the range [i, j] is the difference between the prefix sums.
    return this.prefix[j + 1] - this.prefix[i];
  }
}

/**
 * Time Complexity:
	•	Initialization: O(n) – Building the prefix sum array requires one pass through the input array.
	•	Query (sumRange): O(1) – Each range sum query is answered in constant time.

 * Space Complexity: O(n) – The prefix sum array uses space proportional to the number of elements in nums.
 */
