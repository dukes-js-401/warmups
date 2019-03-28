'use strict';

var llPractice = new linkedList();

function iterate(llist) {
  var current = llist.Head;
  while(current.next !== null){
    console.log(current.value);
    current = current.next;
  }
}