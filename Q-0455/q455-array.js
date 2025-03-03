// LC Q455
// Assign Cookies

var findContentChildren = function (g, s) {
  // Sort the greed factors and cookie sizes in ascending order.
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0,
    cookie = 0;

  // Use two pointers to try and satisfy each child's greed with the available cookies.
  while (child < g.length && cookie < s.length) {
    // If the current cookie can satisfy the child's greed,
    // move to the next child.
    if (s[cookie] >= g[child]) {
      child++;
    }
    // Move to the next cookie (regardless of whether the current child was satisfied)
    cookie++;
  }

  // The number of children satisfied is given by the child pointer.
  return child;
};

/**
 * Time Complexity:
	•	Sorting the arrays takes O(n log n) and O(m log m), where n is the number of children and m is the number of cookies.
	•	The two-pointer scan is O(n + m).
	•	Overall: O(n log n + m log m).

 * Space Complexity:
	•	O(1) extra space is used, aside from the space required for sorting (which can be considered O(1) if sorting is done in-place).
 */
