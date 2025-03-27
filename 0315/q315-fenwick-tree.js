// LC Q315
// Count of Smaller Numbers After Self

class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  // Increment the value at index 'i' by delta.
  update(i, delta) {
    while (i < this.tree.length) {
      this.tree[i] += delta;
      i += i & -i; // Move to next responsible node.
    }
  }

  // Query cumulative frequency sum up to index 'i'.
  query(i) {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i; // Move to parent node.
    }
    return sum;
  }
}
var countSmaller = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(0);

  // Coordinate compression: map each unique number to a unique rank.
  const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
  const rank = new Map();
  sorted.forEach((num, index) => {
    rank.set(num, index + 1); // ranks are 1-indexed
  });

  // Initialize Fenwick Tree with size equal to number of unique elements.
  const ft = new FenwickTree(sorted.length);

  // Process elements from right to left.
  for (let i = n - 1; i >= 0; i--) {
    const r = rank.get(nums[i]);
    // Query BIT for count of numbers with rank less than current.
    res[i] = ft.query(r - 1);
    // Update BIT: increment count for current number's rank.
    ft.update(r, 1);
  }

  return res;
};
