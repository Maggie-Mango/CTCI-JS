  const zipperLists = (head1, head2) => {
    let current1 = head1.next;
    let current2 = head2;
    let tail = head1;
    let count = 0;
    while (current1 !== null && current2 !== null) {
      //count will dictate whether to take node from 1 or 2
      if (count % 2 === 0) {
        tail.next = current2
        current2 = current2.next
      } else {
        tail.next = current1;
        current1 = current1.next;
      }
      tail = tail.next;
      count += 1;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tal.next = current2;

    return head1;
  }

  //recursive

  cosnt zipperLists = (head1, head2) => {
    //basecases
    if (head1 === null && head2 === null) return null
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head2.next = zipperList(next1, next2); //recursion chains the rest
    return head1;
  }