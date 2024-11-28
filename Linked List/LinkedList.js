import Node from "./Node.js"

const privateVars = {
  head: null,
  tail: null, 
  inList: new Set(),
  size: 0,
};

const LinkedList = {
  append, 
  prepend,
  at, 
  pop,
  contains,
  find,
  toString,
  insertAt,
  removeAt,
  size,
};

function removeAt(index) {
  if (index == privateVars.size-1) {
    pop();
  } else if (index < 0 || index >= privateVars.size) {
    throw new Error('index out of range');
  } else if (index === 0) {
    privateVars.inList.delete(privateVars.head.value);
    privateVars.head = privateVars.head.nextNode;
    privateVars.size--;
  } else {
    const prev = at(index-1);
    const oldVal = prev.nextNode.value;
    const after = at(index+1);
    prev.nextNode = after;
    privateVars.size--;
    privateVars.inList.delete(oldVal);
  }
}

function insertAt(value, index) {
  if (index == privateVars.size) {
    append(value);
  } else if (index === 0) {
    prepend(value);
  } else if (index > privateVars.size || index < 0) {
    throw new Error('index out of range');
  } else {
    let prev = at(index-1);
    let curr = prev.nextNode;
    prev.nextNode = {...Node, value, nextNode: curr};
    privateVars.size++;
    privateVars.inList.add(value);
  }
}

function append(value) {
  const newNode = { ...Node, value, nextNode: null }; //spreads properties of Node to new object
  if (privateVars.head === null) {
    privateVars.head = newNode;
    privateVars.tail = newNode;
  } else {
    privateVars.tail.nextNode = newNode;
    privateVars.tail = newNode;
  }
  privateVars.size++;
  privateVars.inList.add(value);
}

function prepend(value) {
  if (privateVars.head === null) {
    append(value);
    return;
  }
  const newNode = { ...Node, value, nextNode: privateVars.head};
  privateVars.head = newNode;
  privateVars.size++;
  privateVars.inList.add(value);
}

function at(index) {
  if (index >= privateVars.size || index < 0) {
    return null;
  }

  let list = privateVars.head;
  while (index > 0) {
    list = list.nextNode;
    index--;
  }
  return list;
}

function pop() {
  if (privateVars.size === 0) {
    throw new Error('attempting to pop from an empty list');
  }
  const last = privateVars.tail;
  const secondLast = at(privateVars.size-2);
  privateVars.tail = secondLast;
  secondLast.nextNode = null;
  privateVars.size--;
  privateVars.inList.delete(last.value);
  return last.value;
}

function contains(value) {
  return privateVars.inList.has(value);
}

function find(value) {
  if (!privateVars.inList.has(value)) {
    return -1;
  }
  let index = 0;
  let list = privateVars.head;
  while (list !== null && list.value !== value) {
    list = list.nextNode;
    index++;
  }
  return index;
}

function toString() {
  if (privateVars.size <= 0) {
    return '';
  }

  let list = privateVars.head, st = '';
  while (list.nextNode !== null) {
    st += `(${list.value}) -> `;
    list = list.nextNode;
  }
  st += `(${list.value})`;
  return st;
}

function size() {
  return privateVars.size;
}

export default LinkedList;