// LC Q350
// Intersection of Two Arrays II

var intersect = function (nums1, nums2) {
  // Create a frequency map for elements in nums1.
  const frequency = {};
  for (let num of nums1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  const result = [];

  // Iterate over nums2 and add common elements to the result.
  for (let num of nums2) {
    if (frequency[num] > 0) {
      result.push(num);
      frequency[num]--;
    }
  }

  return result;
};

/**
 * Time Complexity: O(m + n)
	•	Building the frequency map for nums1 takes O(m), where m is the length of nums1.
	•	Iterating through nums2 takes O(n), where n is the length of nums2.
	•	Overall, the algorithm processes each element of both arrays once.
    
 * Space Complexity: O(m)
	•	The frequency map stores up to m key-value pairs in the worst case when all elements in nums1 are unique.
	•	The space required for the result array depends on the number of intersecting elements.
 */
