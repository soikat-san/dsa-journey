// LC Q121
// Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let minStock = prices[0],
    maxProfit = 0;
  if (prices.length < 2) {
    return 0;
  }
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStock) {
      minStock = prices[i];
    } else if (maxProfit < prices[i] - minStock) {
      maxProfit = prices[i] - minStock;
    }
  }

  return maxProfit;
};

/**
 * Time Complexity: O(n)
The solution makes a single pass through the array, processing each element exactly once.

 * Space Complexity: O(1)
Only a constant amount of extra space is used (two variables: minPrice and maxProfit).
 */
