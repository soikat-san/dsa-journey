// LC Q594
// Longest Harmonious Subsequence

var findLHS = function (nums) {
  // Create a frequency map to count the occurrences of each number.
  const freq = new Map();
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  let maxLength = 0;
  // Iterate over each unique number in the frequency map.
  for (let [num, count] of freq.entries()) {
    // If the number + 1 exists, then we have a harmonious subsequence.
    if (freq.has(num + 1)) {
      maxLength = Math.max(maxLength, count + freq.get(num + 1));
    }
  }

  return maxLength;
};

/**
 * Time Complexity: O(n)
	•	Building the frequency map takes O(n).
	•	Iterating over the keys in the map takes O(n) in the worst case.

 * Space Complexity: O(n)
	•	The frequency map stores counts for up to n distinct numbers.
 */
