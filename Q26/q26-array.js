// LC Q1
// Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1; // Pointer for unique elements

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

/**
 * Time Complexity: O(n)
The algorithm processes each element of the array exactly once in the single loop, resulting in linear time complexity.

* Space Complexity: O(1)
It uses only a few extra variables (the pointer k and the loop index i), which means it operates with constant extra space.
 */