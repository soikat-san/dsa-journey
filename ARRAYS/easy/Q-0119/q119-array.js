// LC Q119
// Pascal's Triangle II

var getRow = function(rowIndex) {
    // Start with the first row, [1]
    const row = [1];
    
    // Build the row iteratively up to rowIndex
    for (let i = 1; i <= rowIndex; i++) {
        // Update the row from right to left to avoid overwriting needed values
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
        // Append 1 at the end of each row
        row.push(1);
    }
    
    return row;
};

/**
 * Time Complexity: O(rowIndex²)
The outer loop runs rowIndex times, and the inner loop runs up to i times on each iteration. 
This results in a total of roughly O(rowIndex*(rowIndex + 1)/2) operations, which simplifies to O(rowIndex²).

 * Space Complexity: O(rowIndex)
The solution builds and returns a single row of the triangle, whose length is rowIndex + 1.
 */