// LC Q575
// Distribute Candies

var distributeCandies = function (candyType) {
  // Count unique candy types using a Set.
  const uniqueCandies = new Set(candyType);

  // The sister can eat half of the candies.
  const maxCandiesAllowed = candyType.length / 2;

  // The maximum number of unique types is the minimum of the number of unique candies
  // and the maximum number she can eat.
  return Math.min(uniqueCandies.size, maxCandiesAllowed);
};

/**
 * Determining the Maximum Unique Types:
	•	The answer is the minimum between the number of unique candy types and the number of candies she is allowed to eat.
    •	This is because even if there are many unique types, she can only eat candyType.length / 2 candies in total.

 * Time Complexity: O(n)
	•	We iterate over the candy array once to populate the Set.

 * Space Complexity: O(n)
	•	In the worst case, when all candy types are unique, the Set will store all n elements.
 */
