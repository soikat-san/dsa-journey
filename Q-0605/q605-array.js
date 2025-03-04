// LC Q605
// Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot is empty.
    if (flowerbed[i] === 0) {
      // Check if the left and right plots are empty (or if it is at the boundary).
      let emptyLeft = i === 0 || flowerbed[i - 1] === 0;
      let emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      // If both sides are empty, we can plant a flower here.
      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1; // Plant a flower.
        count++;

        // If we have already planted enough flowers, return true.
        if (count >= n) {
          return true;
        }
      }
    }
  }

  // Return true if count is at least n, else false.
  return count >= n;
};

/**
 * Time Complexity: O(n)
The algorithm makes a single pass through the flowerbed array, processing each element once.

 * Space Complexity: O(1)
The solution uses a constant amount of extra space, modifying the input array in-place.
 */
