// LC Q566
// Reshape the Matrix

var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  // Check if the total number of elements matches.
  if (m * n !== r * c) {
    return mat;
  }

  // Initialize the reshaped matrix.
  const result = new Array(r);
  for (let i = 0; i < r; i++) {
    result[i] = new Array(c);
  }

  // Fill the reshaped matrix by iterating over the original matrix.
  let row = 0,
    col = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[row][col] = mat[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++;
      }
    }
  }

  return result;
};

/**
 * Time Complexity: O(m * n)
Every element in the original matrix is visited exactly once.

 * Space Complexity: O(m * n)
A new matrix of the same total number of elements is created, which takes extra space proportional to the input size.
 */
