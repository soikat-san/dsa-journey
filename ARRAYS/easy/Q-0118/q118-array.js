// LC Q118
// Pascal's Triangle

var generate = function(numRows) {
    const triangle = [];
    
    // If no rows are requested, return an empty triangle.
    if (numRows === 0) return triangle;
    
    // The first row is always [1].
    triangle.push([1]);
    
    // Build the triangle row by row.
    for (let i = 1; i < numRows; i++) {
        const row = [];
        const prevRow = triangle[i - 1];
        
        // The first element of each row is always 1.
        row.push(1);
        
        // Each interior element is the sum of the two numbers above it.
        for (let j = 1; j < i; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }
        
        // The last element of each row is always 1.
        row.push(1);
        
        // Append the newly created row to the triangle.
        triangle.push(row);
    }
    
    return triangle;
};

/**
 * Time Complexity: O(numRows²)
The outer loop runs for numRows iterations and the inner loop runs for roughly i iterations on the i-th row. In total, 
the number of operations is proportional to the sum of the first numRows numbers, which is O(numRows²).

 * Space Complexity: O(numRows²)
The space required to store the triangle is proportional to the total number of elements in all rows, which also sums up to O(numRows²).
 */