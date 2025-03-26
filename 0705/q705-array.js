// LC Q705
// Design Hashset

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  // Set a capacity (number of buckets). A prime number or power of 2 is common,
  // but for simplicity we'll use 1000 buckets.
  this.capacity = 1000;
  // Initialize an array of empty buckets.
  this.buckets = Array.from({ length: this.capacity }, () => []);
};

/**
 * Hash function to map a key to a bucket index.
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.hash = function (key) {
  return key % this.capacity;
};

/**
 * Add a key to the HashSet.
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];
  // Only add the key if it is not already present.
  if (!bucket.includes(key)) {
    bucket.push(key);
  }
};

/**
 * Removes a key from the HashSet.
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];
  const pos = bucket.indexOf(key);
  if (pos !== -1) {
    bucket.splice(pos, 1);
  }
};

/**
 * Returns true if this set contains the specified key.
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  return this.buckets[index].includes(key);
};

/**
 * Time Complexity:
	•	Average-case for add, remove, and contains is O(1) if the keys are well-distributed across buckets.
	•	Worst-case time complexity is O(n) when many keys collide into the same bucket.

 * Space Complexity: O(n)
	•	The total space is proportional to the number of keys stored in the HashSet, in addition to the fixed bucket array.
 */
