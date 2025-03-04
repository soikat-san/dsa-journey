// LC Q646
// Image Smoother

var imageSmoother = function (M) {
  const m = M.length;
  if (m === 0) return [];
  const n = M[0].length;

  // Initialize the result matrix with the same dimensions as M.
  const res = Array.from({ length: m }, () => Array(n).fill(0));

  // Iterate over each cell in M.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0,
        count = 0;

      // Iterate over the 3x3 grid centered at M[i][j].
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          // Only consider valid indices.
          if (x >= 0 && x < m && y >= 0 && y < n) {
            sum += M[x][y];
            count++;
          }
        }
      }

      // Set the current cell in the result as the floor of the average.
      res[i][j] = Math.floor(sum / count);
    }
  }

  return res;
};

/**
 * Time Complexity: O(m * n)
	•	For each cell in the matrix (m * n cells), we look at up to 9 neighboring cells. Since 9 is a constant, the overall time complexity is O(m * n).
    
 * Space Complexity: O(m * n)
	•	We create a new matrix res of the same size as the input matrix to store the result.
 */
