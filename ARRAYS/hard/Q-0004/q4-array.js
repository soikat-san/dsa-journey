// LC Q4
// Median of Two Sorted Arrays

var findMedianSortedArrays = function (nums1, nums2) {
  // Ensure nums1 is the smaller array for binary search efficiency.
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;

  while (low <= high) {
    // Partition nums1 and compute the corresponding partition for nums2.
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    // If partitionX is 0 it means nothing is on the left side. Use -Infinity for maxLeftX.
    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    // If partitionX is length of nums1 then there is nothing on right side. Use Infinity for minRightX.
    let minRightX = partitionX === x ? Infinity : nums1[partitionX];

    // Similarly for nums2.
    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    // Check if we have found the correct partition.
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // If the combined array is even.
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        // If the combined array is odd.
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // Move towards left in nums1.
      high = partitionX - 1;
    } else {
      // Move towards right in nums1.
      low = partitionX + 1;
    }
  }

  // If input arrays are not sorted or are invalid.
  throw new Error("Input arrays are not sorted");
};
