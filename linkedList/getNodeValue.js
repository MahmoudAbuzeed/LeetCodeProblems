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


  const getNodeValue = (head, index)=> {
    let current  = head;
    let count = 0;
    while(current !== null) {
        if(count === index) return current.val
        count+=1;
        current = current.next
    }
    return null;
  }

  const getNodeValueRecursive = (head, index)=> {
    if(head === null) return null
    if(index === 0) return head.val
    return getNodeValueRecursive(head.next, index -1);
  }

  console.log(getNodeValue(a, 2))
  console.log(getNodeValueRecursive(a, 2))