// LC Q682
// Baseball Game

var calPoints = function (ops) {
  const stack = [];

  for (let op of ops) {
    if (op === "C") {
      // "C": Invalidate the previous score.
      stack.pop();
    } else if (op === "D") {
      // "D": Double the previous score and record it.
      stack.push(2 * stack[stack.length - 1]);
    } else if (op === "+") {
      // "+": Sum the previous two scores and record it.
      const n = stack.length;
      stack.push(stack[n - 1] + stack[n - 2]);
    } else {
      // Otherwise, convert the string to a number and record it.
      stack.push(Number(op));
    }
  }

  // Return the sum of all the recorded scores.
  return stack.reduce((total, score) => total + score, 0);
};

/**
 *	Time Complexity: O(n)
	•	The solution iterates through the operations array once. Each operation is processed in constant time.

 * Space Complexity: O(n)
	•	In the worst case, all operations result in a valid score being pushed onto the stack, so the extra space used is proportional to the number of operations.
 */
