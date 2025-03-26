// LC Q463
// Island Perimeter

var islandPerimeter = function (grid) {
  let perimeter = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Iterate through each cell in the grid.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // Start with a contribution of 4 for each land cell.
        perimeter += 4;

        // If the cell above is also land, subtract 2 (shared edge).
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }
        // If the cell to the left is also land, subtract 2 (shared edge).
        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};

/**
 * Time Complexity: O(rows * cols)
The algorithm iterates through every cell in the grid exactly once.

 * Space Complexity: O(1)
Only a constant amount of extra space is used, regardless of the grid size.
 */
