// LC Q414
// Third Maximum Number

var thirdMax = function (nums) {
  // Create a set to filter out duplicate numbers.
  const uniqueNums = [...new Set(nums)];

  // If there are less than three distinct numbers, return the maximum.
  if (uniqueNums.length < 3) {
    return Math.max(...uniqueNums);
  }

  // Otherwise, sort the array in descending order and return the third element.
  uniqueNums.sort((a, b) => b - a);
  return uniqueNums[2];
};

/**
 * Time Complexity:
	•	Creating the set takes O(n) time.
	•	Sorting the unique array takes O(n log n) time in the worst case.
	•	Overall, the time complexity is dominated by the sorting step: O(n log n).
    
 * Space Complexity:
	•	The extra space is used to store the unique elements, which in the worst case is O(n).
 */
