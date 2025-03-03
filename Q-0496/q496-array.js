// LC Q496
// Next Greater Element I

var nextGreaterElement = function (nums1, nums2) {
  // Map to store the next greater element for each number in nums2.
  const nextGreaterMap = new Map();
  // Stack to keep numbers for which we haven't found the next greater element yet.
  const stack = [];

  // Process each element in nums2.
  for (let num of nums2) {
    // While current num is greater than the element at the top of the stack,
    // it is the next greater element for that stack element.
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      nextGreaterMap.set(stack.pop(), num);
    }
    // Push the current number onto the stack.
    stack.push(num);
  }

  // For any numbers left in the stack, no next greater element exists; they are implicitly -1.
  // Now, build the result array for nums1.
  const result = [];
  for (let num of nums1) {
    // Use the mapped value or default to -1 if not found.
    result.push(
      nextGreaterMap.get(num) !== undefined ? nextGreaterMap.get(num) : -1
    );
  }

  return result;
};

/**
 * Time Complexity: O(n + m)
	•	Processing nums2 takes O(m) where m is the length of nums2 (each element is pushed and popped at most once).
	•	Building the result for nums1 takes O(n) where n is the length of nums1.

 * Space Complexity: O(m)
	•	The stack and the map store up to m elements in the worst case.
 */
