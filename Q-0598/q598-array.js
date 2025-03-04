// LC Q598
// Range Addition II

var maxCount = function (m, n, ops) {
  // If there are no operations, every element remains 0 (the maximum value),
  // so the result is the total number of elements.
  if (ops.length === 0) return m * n;

  // The maximum value is achieved only within the intersection of all the operations.
  // Determine the minimum row and column limits among all operations.
  let minRow = m;
  let minCol = n;

  for (let op of ops) {
    // op[0] and op[1] define the dimensions of the submatrix to increment.
    minRow = Math.min(minRow, op[0]);
    minCol = Math.min(minCol, op[1]);
  }

  // The submatrix defined by (0, 0) to (minRow - 1, minCol - 1) is incremented in every operation.
  // Therefore, the number of maximum elements is equal to its area.
  return minRow * minCol;
};

/**
 * Time Complexity: O(k)
	•	k is the number of operations. We iterate through the ops array once.

 * Space Complexity: O(1)
	•	We use only a constant amount of extra space.
 */
