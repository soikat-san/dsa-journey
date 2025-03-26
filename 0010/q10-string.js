// LC Q10
// Regular Expression Matching

function isMatch(s, p) {
  const m = s.length,
    n = p.length;
  // Create a DP table with dimensions (m+1) x (n+1) and initialize with false.
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Empty pattern matches empty string.
  dp[0][0] = true;

  // Initialize dp for patterns like a*, a*b*, etc. which can match an empty string.
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // Fill the DP table.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
        // If current characters match, inherit the result from dp[i-1][j-1].
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        // Two cases:
        // 1. Treat '*' as zero occurrence of the preceding element.
        dp[i][j] = dp[i][j - 2];

        // 2. If the preceding element of '*' matches s[i-1] (or is a '.'),
        // consider the possibility of a match and extend the pattern.
        if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }

  return dp[m][n];
}
