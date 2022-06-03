
//array min jump
function arrayMinJumps(arr) {
  let farthest = 0;
  let currJump = 0;
  let jumpsRequired = 0;

  //loop through the nums
  for (let i = 0; i < arr.length; i++) {
    farthest = Math.max(farthest, i + arr[i])
    if (i === currJump) {
      jumpsRequired++
      currJump = farthest
    }
  }
    return jumpsRequired

}

//spiral traversal
var spiralTraversal = function(matrix) {
  var results = [];
  var startRowIndex = 0;
  var endRowIndex = matrix.length - 1;
  var startColIndex = 0;
  var endColIndex = matrix[0].length - 1;
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    for (var i = startColIndex; i <= endColIndex; i++) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;

    for (var j = startRowIndex; j <= endRowIndex; j++) {

      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex) {
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }

  }

  return results;

};

//add two numbers
var addTwoNumbers = function(l1, l2) {
  let l1num = []
  let l2num = []

  while (l1 || l2) {
      if (l1) {
        l1num.push(l1.val)
        l1 = l1.next
      }

      if (l2) {
        l2num.push(l2.val)
        l2 = l2.next
      }
  }
  l1num = BigInt(l1num.reverse().join(''));
  l2num = BigInt(l2num.reverse().join(''));
  let l3 = l1num + l2num;
  let l3num = l3.toString().split('').reverse().map(x => parseInt(x))
  let head;
  let prev;
  for (let num of l3num) {
    const node = new ListNode(num)
    if (prev) {
        prev.next = node;
    }
    prev = node;

    if (!head) {
        head = node;
    }
  }

  return head || null

};