// LC Q1
// Two Sum

// 1. Brute force
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
    // Return an empty array if no solution is found
    return [];
};

/*
Complexity Analysis

Time complexity: O(n^2)
For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. 
Therefore, the time complexity is O(n^2)

Space complexity: O(1).
The space required does not depend on the size of the input array, so only constant space is used.
*/
