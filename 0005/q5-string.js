// LC Q5
// Longest Palindromic Substring

// Simple & Intuitive
function longestPalindrome(s) {
  if (s == null || s.length < 1) return "";
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    // Expand around the center at i (odd-length palindromes)
    let len1 = expandAroundCenter(s, i, i);
    // Expand around the center between i and i+1 (even-length palindromes)
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

// Manacher's Algorithm
function longestPalindromeManacher(s) {
  if (s == null || s.length === 0) return "";

  // Transform s into a new string with boundaries.
  // For example, for s = "abc", T becomes "^#a#b#c#$".
  let T = "^#";
  for (let i = 0; i < s.length; i++) {
    T += s[i] + "#";
  }
  T += "$";

  const n = T.length;
  const P = new Array(n).fill(0);
  let C = 0,
    R = 0; // Center and right boundary of the current palindrome.

  // Iterate through the transformed string (skipping the first and last boundary characters).
  for (let i = 1; i < n - 1; i++) {
    // Find the mirror position of i with respect to center C.
    let mirror = 2 * C - i;

    // If i is within the right boundary, use the previously computed minimum radius.
    if (i < R) {
      P[i] = Math.min(R - i, P[mirror]);
    }

    // Expand around i as long as the characters match.
    while (T[i + P[i] + 1] === T[i - P[i] - 1]) {
      P[i]++;
    }

    // If the expanded palindrome goes past R, adjust the center C and right boundary R.
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }

  // Find the maximum element in P and its center index.
  let maxLen = 0;
  let centerIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  }

  // Determine the starting index in the original string.
  const start = Math.floor((centerIndex - maxLen) / 2);
  return s.substring(start, start + maxLen);
}
