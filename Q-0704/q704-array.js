// LC Q704
// Binary Search

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

/**
 * Time Complexity: O(log n)
	•	With each iteration, the search space is halved.

 * Space Complexity: O(1)
	•	Only a constant amount of extra space is used.
 */
