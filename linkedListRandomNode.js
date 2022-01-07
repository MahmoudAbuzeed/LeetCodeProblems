/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */

class Solution {
  constructor(head) {
    this.linkedListValues = [];
    while (head) {
      this.linkedListValues.push(head.val);
      head = head.next;
    }
  }

  getRandom() {
    const random = Math.floor(Math.random() * this.linkedListValues.length);
    return this.linkedListValues[random];
  }
}
