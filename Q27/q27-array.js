// LC Q27
// Remove Element

var removeElement = function(nums, val) {
    // k tracks the index where the next non-val element should go
    let k = 0;
    
    // Iterate through the entire array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not the one we want to remove
        if (nums[i] !== val) {
            // Place it at the kth position and increment k
            nums[k] = nums[i];
            k++;
        }
    }
    
    // k is now the count of elements not equal to val
    return k;
};

/**
 * Time Complexity: O(n)
The algorithm processes each element of the array exactly once in the single loop, resulting in linear time complexity.

* Space Complexity: O(1)
It uses only a few extra variables (the pointer k and the loop index i), which means it operates with constant extra space.
 */