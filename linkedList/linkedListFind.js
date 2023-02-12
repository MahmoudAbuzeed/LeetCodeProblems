class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

const linkedListFindRecursive = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFindRecursive(head.next, target);
};

console.log(linkedListFind(a, "R"));
console.log(linkedListFindRecursive(a, "B"));
