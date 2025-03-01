// LC Q136
// Single Number

var singleNumber = function (nums) {
  let result = 0;
  // XOR all numbers. Duplicates will cancel out.
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

/**
 * Time Complexity: O(n)
The algorithm makes one pass through the array, processing each element exactly once.

 * Space Complexity: O(1)
Only a constant amount of extra space is used (the result variable).
 */
