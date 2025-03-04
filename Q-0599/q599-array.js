// LC Q599
// Minimum Index Sum of Two Lists

var findRestaurant = function (list1, list2) {
  // Map each string in list1 to its index for quick lookup.
  const indexMap = new Map();
  for (let i = 0; i < list1.length; i++) {
    indexMap.set(list1[i], i);
  }

  let minSum = Infinity;
  const result = [];

  // Iterate through list2 to find common strings and compute the index sum.
  for (let j = 0; j < list2.length; j++) {
    const str = list2[j];
    if (indexMap.has(str)) {
      const indexSum = j + indexMap.get(str);
      // If we found a lower index sum, update minSum and reset the result array.
      if (indexSum < minSum) {
        minSum = indexSum;
        result.length = 0; // Clear the result array.
        result.push(str);
      }
      // If the index sum matches the current minimum, add the string to the result.
      else if (indexSum === minSum) {
        result.push(str);
      }
    }
  }

  return result;
};

/**
 * Time Complexity: O(n + m)
	•	Building the map from list1 takes O(n) time.
	•	Iterating over list2 takes O(m) time.

 * Space Complexity: O(n)
	•	The extra space is used for the Map, which in the worst case stores all strings from list1.
 */
