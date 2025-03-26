// LC Q349
// Intersection of Two Arrays

var intersection = function (nums1, nums2) {
  // Create a set from the first array for fast lookup.
  const set1 = new Set(nums1);
  // Create a set to store the intersection elements.
  const intersectionSet = new Set();

  // Iterate over the second array.
  for (let num of nums2) {
    // If the current number exists in set1, add it to the intersection set.
    if (set1.has(num)) {
      intersectionSet.add(num);
    }
  }

  // Convert the set of intersection elements into an array and return.
  return Array.from(intersectionSet);
};

/**
 * Time Complexity: O(m + n)
	•	Building set1 from nums1 takes O(m) time, where m is the length of nums1.
	•	Iterating over nums2 takes O(n) time, where n is the length of `nums2).
	•	Overall, the solution processes each array once.

 * Space Complexity: O(m + k)
	•	A set is used to store all elements of nums1 (O(m) space).
	•	Another set is used for the intersection, which in the worst case could store up to k elements (k being the number of common elements, k ≤ m).
	•	The output array requires O(k) space.
 */
