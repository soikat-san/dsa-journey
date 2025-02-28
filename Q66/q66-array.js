// LC Q66
// Plus One

var plusOne = function(digits) {
    // Iterate from the last digit (least significant) to the first.
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, simply add one and return the array.
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // If the digit is 9, it becomes 0 and we carry over to the next digit.
        digits[i] = 0;
    }
    
    // If all digits were 9, the array becomes all zeros.
    // In this case, add a 1 at the beginning to represent the carry.
    digits.unshift(1);
    return digits;
};

/**
 * Time Complexity: O(n)
In the worst case (e.g., when all digits are 9), the function iterates through all n digits once.

 * Space Complexity: O(1)
The solution modifies the array in-place and uses only a constant amount of extra space. 
Although unshift(1) may internally allocate space when shifting elements, we consider this operation as constant extra space in terms of algorithm complexity.
 */