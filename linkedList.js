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
}

