// LC Q315
// Count of Smaller Numbers After Self

var countSmaller = function (nums) {
  const n = nums.length;
  const counts = new Array(n).fill(0);
  // indices array holds the original indices of the elements in nums
  const indices = new Array(n);
  for (let i = 0; i < n; i++) {
    indices[i] = i;
  }

  // mergeSort sorts indices based on the corresponding value in nums
  // and counts the number of smaller elements to the right.
  function mergeSort(left, right) {
    if (right - left <= 1) return;
    const mid = Math.floor((left + right) / 2);
    mergeSort(left, mid);
    mergeSort(mid, right);
    merge(left, mid, right);
  }

  function merge(left, mid, right) {
    const temp = [];
    let i = left,
      j = mid;
    let rightCount = 0; // number of elements from right part that have been placed before the current element from left

    while (i < mid && j < right) {
      if (nums[indices[j]] < nums[indices[i]]) {
        // An element from the right is smaller than the left element.
        temp.push(indices[j]);
        rightCount++;
        j++;
      } else {
        // All elements that have been moved from the right are smaller than nums[indices[i]].
        counts[indices[i]] += rightCount;
        temp.push(indices[i]);
        i++;
      }
    }

    // Process remaining elements in the left subarray.
    while (i < mid) {
      counts[indices[i]] += rightCount;
      temp.push(indices[i]);
      i++;
    }

    // Process remaining elements in the right subarray.
    while (j < right) {
      temp.push(indices[j]);
      j++;
    }

    // Copy the sorted subarray back into indices.
    for (let k = left; k < right; k++) {
      indices[k] = temp[k - left];
    }
  }

  mergeSort(0, n);
  return counts;
};
