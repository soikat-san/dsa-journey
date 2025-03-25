// LC Q217
// Contains Duplicate

// #1
var containsDuplicate = function (nums) {
  // Create a set to track numbers we've seen
  const seen = new Set();

  // Iterate over each number in the array
  for (let num of nums) {
    // If the number is already in the set, a duplicate exists
    if (seen.has(num)) {
      return true;
    }
    // Otherwise, add the number to the set
    seen.add(num);
  }

  // If no duplicates were found, return false
  return false;
};

// #2
var containsDuplicate = function (nums) {
  let i;
  nums = nums.sort();
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * Time Complexity: O(n)
The solution processes each element of the array exactly once. Insertion and lookup in a Set generally operate in constant time on average.

 * Space Complexity: O(n)
In the worst case (when there are no duplicates), every element is added to the set, so the space used is proportional to the number of elements in the array.
 */
