const List = function (val) {
  this.next = null;
  this.val = val;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

console.log(item1)


const removeCircle = (head) => {
  if (!head)
    return null;
  const visitedNodes = new Set();
  let current = head;
  let prev = null

  while (current) {
    if (visitedNodes.has(current)) {
      prev.next = null;
      break;
    }

    visitedNodes.add(current)
    prev = current;
    current = current.next

  }

}

removeCircle(item1)
console.log(item1)