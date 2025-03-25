// LC Q219
// Contains Duplicate II

// Sliding Window with a Set:
var containsNearbyDuplicate = function (nums, k) {
  // Create a Set to store numbers within the current sliding window
  const seen = new Set();

  // Iterate over each element in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current number is already in the set, we've found a duplicate
    // within the allowed distance.
    if (seen.has(nums[i])) {
      return true;
    }
    // Add the current number to the set.
    seen.add(nums[i]);

    // If the size of the set exceeds k, remove the element that is k positions
    // behind the current index to maintain the sliding window of size k.
    if (seen.size > k) {
      seen.delete(nums[i - k]);
    }
  }

  // No duplicates were found within k distance.
  return false;
};

/**
 * Maintaining the Window Size:
	•	After adding the current element to the set, if the set’s size exceeds k, the element that is k positions behind (nums[i - k]) is removed. 
    .   This ensures that only elements within the last k indices remain in the set.
    
 * Time Complexity: O(n)
The algorithm iterates over the array once, with each operation inside the loop (insertion, deletion, and lookup in a Set) being O(1) on average.

 * Space Complexity: O(k)
At most, the Set holds k elements at any given time, so the extra space used is O(k).
 */
