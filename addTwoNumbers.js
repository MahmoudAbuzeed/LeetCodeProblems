/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//TODO: not implemented yet

// class Node {
//   constructor(element, next) {
//     this.element = element;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   add(element) {
//     const node = new Node(element);

//     let current;
//     if (this.head == null) {
//       this.head == node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   printList(element) {
//     var curr = element;
//     var str = "";
//     while (curr) {
//       str += curr.element + " ";
//       curr = curr.next;
//     }
//     console.log("SSSS", str);
//   }
// }

var addTwoNumbers = function (l1, l2) {
  // const linkedObject = new LinkedList();
  // let list;

  // for (let i = 0; i < l1.length; i++) {
  //   linkedObject.printList(l1[i]);
  // }
  // // console.log(list);

  let num1 = "";
  let num2 = "";
  while (l1) {
    num1 += l1.val;
    l1 = l1.next;
  }

  while (l2) {
    num2 += l2.val;
    l2 = l2.next;
  }
  const sumNumbers =
    BigInt([...num1].reverse().join("")) +
    BigInt([...num2].reverse().join("")) +
    "";
  let listNodeResult;

  for (const num of sumNumbers) {
    const newNode = new ListNode(num, listNodeResult);
    listNodeResult = newNode;
  }
  return listNodeResult;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
