class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node(2);
  const b = new Node(8);
  const c = new Node(7);
  const d = new Node(3);
  
  a.next = b;
  b.next = c;
  c.next = d;
  
  // 2 -> 8 -> 7 -> 3 -> NULL

  const sumList = (head) => {
    let sum = 0;
    let current = head;
    while(current !== null){
        sum+= current.val
        current = current.next
    }
    return sum
  }

  const sumListRecursive = (head) => {
    if(head === null) return 0;
   return head.val + sumListRecursive(head.next)
  }


  console.log(sumList(a))
  console.log(sumListRecursive(a))