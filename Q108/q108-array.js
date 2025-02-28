// LC Q108
// Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function(nums) {
    // Helper function that creates BST recursively.
    function helper(left, right) {
        // Base case: if left index exceeds right, there are no elements to process.
        if (left > right) return null;
        
        // Choose middle element to maintain height balance.
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid]);
        
        // Recursively build the left subtree using elements left of mid.
        node.left = helper(left, mid - 1);
        // Recursively build the right subtree using elements right of mid.
        node.right = helper(mid + 1, right);
        
        return node;
    }
    
    return helper(0, nums.length - 1);
};

/**
 * Time Complexity: O(n)
Every element of the array is visited exactly once to create a node, resulting in linear time complexity.

 * Space Complexity: O(log n) (Auxiliary)
The depth of the recursive call stack is O(log n) for a balanced tree. 
If you include the space needed to store the output tree, the overall space is O(n), but the extra space used by the algorithm is O(log n).
 */