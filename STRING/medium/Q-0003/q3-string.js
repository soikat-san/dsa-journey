// LC Q3
// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let start = 0,
    maxLen = 0;
  const seen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    // If the character is already seen and is in the current window, adjust the start pointer.
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    // Update the last seen index for the character.
    seen.set(char, end);
    // Calculate the current window size and update maxLen if necessary.
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
