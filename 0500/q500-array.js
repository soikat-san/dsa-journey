// LC Q500
// Keyboard Row

var findWords = function (words) {
  // Define sets for each row on the keyboard (using lowercase letters).
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  const result = [];

  // Process each word.
  for (let word of words) {
    // Convert the word to lowercase for case-insensitive comparisons.
    const lowerWord = word.toLowerCase();

    // Determine which row the first character belongs to.
    let targetRow;
    if (row1.has(lowerWord[0])) {
      targetRow = row1;
    } else if (row2.has(lowerWord[0])) {
      targetRow = row2;
    } else {
      targetRow = row3;
    }

    // Check if every character in the word belongs to the target row.
    let canType = true;
    for (let char of lowerWord) {
      if (!targetRow.has(char)) {
        canType = false;
        break;
      }
    }

    // If the word can be typed using one row, add it to the result.
    if (canType) {
      result.push(word);
    }
  }

  return result;
};

/**
 * Time Complexity: O(n * m)
	•	n is the number of words and m is the average length of each word.
	•	For each word, we iterate through its characters, leading to a total complexity of O(n * m).

 * Space Complexity: O(1)
	•	Aside from the space used to store the output (which depends on the input), the solution uses a constant amount of extra space for the sets and loop variables.
 */
