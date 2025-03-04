// LC Q643
// Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  // Compute the sum of the first window of size k.
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  // Slide the window over the rest of the array.
  for (let i = k; i < nums.length; i++) {
    // Update the sum by adding the new element and subtracting the element leaving the window.
    sum = sum + nums[i] - nums[i - k];
    // Update the maxSum if the current window's sum is greater.
    maxSum = Math.max(maxSum, sum);
  }

  // The maximum average is the maximum sum divided by k.
  return maxSum / k;
};

/**
 * Time Complexity: O(n)
	•	We traverse the array once to compute the initial window sum and then once more to slide the window over the array.

 * Space Complexity: O(1)
	•	Only a constant amount of extra space is used, regardless of the size of the input.
 */
