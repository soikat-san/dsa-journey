// LC Q697
// Degree of Array

var findShortestSubArray = function (nums) {
  const left = new Map(); // Map to record the first occurrence of each number.
  const right = new Map(); // Map to record the last occurrence of each number.
  const count = new Map(); // Map to record the frequency of each number.
  let degree = 0;

  // Single pass: record left/right indices and count frequency.
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!left.has(num)) {
      left.set(num, i);
    }
    right.set(num, i);
    count.set(num, (count.get(num) || 0) + 1);
    degree = Math.max(degree, count.get(num));
  }

  let minLength = nums.length;
  // Iterate over all unique numbers to find the smallest subarray with frequency equal to the degree.
  for (let [num, freq] of count.entries()) {
    if (freq === degree) {
      minLength = Math.min(minLength, right.get(num) - left.get(num) + 1);
    }
  }

  return minLength;
};

/**
 * Time Complexity: O(n)
	•	We traverse the array once to build the maps (O(n)) and then iterate over at most n unique numbers (O(n)).

 * Space Complexity: O(n)
	•	In the worst case, when all numbers are unique, the maps store n entries.
 */
