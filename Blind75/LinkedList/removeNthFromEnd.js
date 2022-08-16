var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode();
  dummy.next = head;
  let left = dummy
  let right = dummy

  //move right to where n is
  for (let i = 0; i < n; i++) {
      right = right.next;
  }
  //and then move left a few spaces until right.next is null
  while (right.next) {
      right = right.next;
      left = left.next; //this should stop right before the var we need
  }
  //assign left.next into left.next.next
  left.next = left.next.next; //just skip one
  return dummy.next;

}