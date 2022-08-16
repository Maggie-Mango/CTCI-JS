/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let head = new ListNode();
  let cur = head;

  while (current1 && current2) {

      if (current2.val > current1.val) {
          cur.next = current1;
          current1 = current1.next;
      } else {
          cur.next = current2;
          current2 = current2.next;
      }
      cur = cur.next;
  }
  if (current1) cur.next = current1;
  if (current2) cur.next = current2;

  return head.next;
};