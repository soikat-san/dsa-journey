// LC Q88
// Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    // Initialize three pointers:
    // p1 points to the last valid element in nums1,
    // p2 points to the last element in nums2,
    // p points to the last index of nums1.
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    
    // Compare elements from nums1 and nums2 starting from the end,
    // and place the larger one at index p in nums1.
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    // If there are still elements in nums2, copy them over.
    // No need to copy nums1 because they're already in place.
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};

/**
 * The trick is to start merging from the end of nums1 to avoid overwriting, using two pointers. 
 
 * Time Complexity: O(m + n)
The algorithm processes each element of nums1 and nums2 exactly once.

 * Space Complexity: O(1)
The solution uses a constant amount of extra space regardless of the input sizes.
 */