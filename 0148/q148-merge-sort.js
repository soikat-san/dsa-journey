// LC Q148
// Sort List

var sortList = function (head) {
  if (!head || !head.next) return head; // Base case: 0 or 1 element

  // Use slow and fast pointers to find the middle of the list.
  let prev = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // Cut the list into two halves.
  prev.next = null;

  // Recursively sort each half.
  let l1 = sortList(head);
  let l2 = sortList(slow);

  // Merge the two sorted halves.
  return merge(l1, l2);
};

function merge(l1, l2) {
  let dummy = new ListNode(0);
  let tail = dummy;
  // Merge the two lists by choosing the smaller value at each step.
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  // Attach any remaining nodes.
  tail.next = l1 ? l1 : l2;
  return dummy.next;
}
