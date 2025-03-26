// LC Q506
// Relative Ranks

var findRelativeRanks = function (score) {
  // Create a copy of the score array and sort it in descending order.
  const sortedScores = [...score].sort((a, b) => b - a);

  // Map each score to its rank string.
  const rankMap = new Map();
  for (let i = 0; i < sortedScores.length; i++) {
    if (i === 0) {
      rankMap.set(sortedScores[i], "Gold Medal");
    } else if (i === 1) {
      rankMap.set(sortedScores[i], "Silver Medal");
    } else if (i === 2) {
      rankMap.set(sortedScores[i], "Bronze Medal");
    } else {
      rankMap.set(sortedScores[i], (i + 1).toString());
    }
  }

  // Map the original scores to their corresponding rank.
  return score.map((s) => rankMap.get(s));
};

/**
 * Time Complexity: O(n log n)
	•	Sorting the scores takes O(n log n).
	•	Creating the map and mapping back to the original order takes O(n).
    
 * Space Complexity: O(n)
	•	A sorted copy of the array and the map require O(n) extra space.
 */
