function LinkedList() { // linked list constructor
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) { // node constructor
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode; // case that nodes already present
  else this.tail = newNode; // case that no nodes already present
  this.head = newNode;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null // LinkedList is empty
  var val = this.head.value; 
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode; // case that list is not empty
  else this.head = newNode; // case that list is empty
  this.tail = newNode;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null; // LinkedList is empty
  var val = this.tail.value;
  this.tail = thsi.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}
