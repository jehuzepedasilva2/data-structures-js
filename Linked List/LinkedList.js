import Node from "./Node.js"

const LinkedList = {
  head: null,
  tail: null, 
  size: 0,
  inList: new Set(),
  append, 
  prepend,
  at, 
  pop,
  contains,
  find,
  toString,
}

function append(value) {
  const newNode = { ...Node, value, nextNode: null }; //spreads properties of Node to new object
  if (LinkedList.head === null) {
    LinkedList.head = newNode;
    LinkedList.tail = newNode;
  } else {
    LinkedList.tail.nextNode = newNode;
    LinkedList.tail = newNode;
  }
  LinkedList.size++;
  LinkedList.inList.add(value);
}

function prepend(value) {
  if (LinkedList.head === null) {
    append(value);
    return;
  }
  const newNode = { ...Node, value, nextNode: LinkedList.head};
  LinkedList.head = newNode;
  LinkedList.size++;
  LinkedList.inList.add(value);
}

function at(index) {
  if (index >= LinkedList.size || index < 0) {
    throw new Error('index out of range');
  }

  let list = LinkedList.head;
  while (index > 0) {
    list = list.nextNode;
    index--;
  }
  return list;
}

function pop() {
  if (LinkedList.size === 0) {
    throw new Error('attempting to pop from an empty list');
  }

  let list = LinkedList.head;
  let i = LinkedList.size-1;
  while (i > 1) {
    list = list.nextNode;
    i--;
  }
  const last = LinkedList.tail;
  LinkedList.tail = list;
  list.nextNode = null;
  LinkedList.size--;
  return last.value;
}

function contains(value) {
  return LinkedList.inList.has(value);
}

function find(value) {
  if (!LinkedList.inList.has(value)) {
    throw new Error(`${value} not in list`);
  }
  let index = 0;
  let list = LinkedList.head;
  while (list !== null && list.value !== value) {
    list = list.nextNode;
    index++;
  }
  return index;
}

function toString() {
  let list = LinkedList.head, st = '';
  while (list.nextNode !== null) {
    st += `${list.value} -> `;
    list = list.nextNode;
  }
  st += `${list.value}`;
  return st;
}

export default LinkedList;