// LC Q120
// Triangle

function minimumTotal(triangle) {
  if (!triangle || triangle.length === 0) return 0;

  const n = triangle.length;
  // Create a DP array that starts as a copy of the last row of the triangle.
  const dp = triangle[n - 1].slice();

  // Iterate from the second last row up to the first row.
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // Update dp[j] to be the sum of triangle[i][j] and the minimum of the two adjacent numbers in the row below.
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }

  // The top element of the dp array now contains the minimum path sum.
  return dp[0];
}
