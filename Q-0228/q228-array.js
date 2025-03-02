// LC Q228
// Summary Ranges

var summaryRanges = function (nums) {
  const res = [];

  // Edge case: If the array is empty, return an empty result.
  if (nums.length === 0) return res;

  // Initialize the start and previous pointers to the first element.
  let start = nums[0];
  let prev = nums[0];

  // Iterate through the array, including one extra iteration to handle the last range.
  for (let i = 1; i <= nums.length; i++) {
    // If we're within the array bounds and the current number continues the range,
    // update the previous number and continue.
    if (i < nums.length && nums[i] === prev + 1) {
      prev = nums[i];
    } else {
      // When the range ends (or end of array), determine if it was a single number or a range.
      if (start === prev) {
        res.push(start.toString());
      } else {
        res.push(`${start}->${prev}`);
      }
      // If we haven't reached the end of the array, start a new range.
      if (i < nums.length) {
        start = nums[i];
        prev = nums[i];
      }
    }
  }

  return res;
};

/**
 * Time Complexity: O(n)
The algorithm processes each element in the array once, resulting in linear time complexity.

 * Space Complexity: O(1)
Aside from the output array (which is required to store the result), the algorithm uses only a constant amount of additional space.
 */
