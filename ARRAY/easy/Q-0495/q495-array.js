// LC Q495
// Teemo Attacking

var findPoisonedDuration = function (timeSeries, duration) {
  let total = 0;

  // Loop through each attack time.
  for (let i = 0; i < timeSeries.length; i++) {
    // For all but the last attack, add the non-overlapping time.
    if (i < timeSeries.length - 1) {
      // The poison effect lasts for either the full duration or the gap to the next attack,
      // whichever is smaller.
      total += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    } else {
      // The last attack always contributes the full duration.
      total += duration;
    }
  }

  return total;
};

/**
 * Time Complexity: O(n)
The solution processes each attack time once, where n is the number of attacks in timeSeries.

 * Space Complexity: O(1)
Only a constant amount of extra space is used regardless of the size of the input.
 */
