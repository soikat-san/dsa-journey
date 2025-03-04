// LC Q645
// Set Mismatch

var findErrorNums = function (nums) {
  const n = nums.length;
  let duplicate = -1,
    missing = -1;
  // Create a frequency array to count occurrences of numbers from 1 to n.
  const count = new Array(n + 1).fill(0);

  // Count the frequency of each number in the array.
  for (let num of nums) {
    count[num]++;
  }

  // Identify the duplicate (frequency > 1) and the missing (frequency === 0).
  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      missing = i;
    } else if (count[i] > 1) {
      duplicate = i;
    }
  }

  return [duplicate, missing];
};

/**
 * Time Complexity: O(n)
	•	We traverse the array once to count frequencies and then once more to identify the duplicate and missing numbers.

 * Space Complexity: O(n)
	•	We use a frequency array of size n + 1 to store counts for numbers 1 to n.
 */
