// LC Q35
// Search Insert Position

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        // Calculate the mid-point of the current search range.
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            // If the target is found, return the mid index.
            return mid;
        } else if (nums[mid] < target) {
            // If target is greater, discard the left half by moving left pointer.
            left = mid + 1;
        } else {
            // If target is smaller, discard the right half by moving right pointer.
            right = mid - 1;
        }
    }
    
    // When the loop ends, left is the insertion point for the target.
    return left;
};

/**
 * Time Complexity: O(log n)
The binary search algorithm divides the search range in half with each iteration, leading to logarithmic time complexity.

 * Space Complexity: O(1)
The solution uses a fixed number of variables (left, right, mid) and operates in constant space.
 */