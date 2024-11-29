import Node from "./Node.js";

export default class LinkedList {

  #head = null;
  #tail = null;
  #size = 0;

  append(key, val) {
    const newNode = new Node(key, val);
    if (this.#head === null) {
      this.#head = newNode;
    } else {
      this.#tail.next = newNode;
    }
    this.#tail = newNode;
    this.#size++;
  }

  #getNodeFromKey(key) {
    let curr = this.#head;
    while (curr !== null) {
      if (curr.key === key) {
        return curr
      }
      curr = curr.next;
    }
    return null;
  }

  getValue(key) {
    const node = this.#getNodeFromKey(key);
    if (node === null) {
      return null;
    }
    return node.val;
  }

  update(key, newVal) {
    const node = this.#getNodeFromKey(key);
    node.val = newVal;    
  }

  remove(key) {
    const curr = this.#head;
    const prev = curr;
    while (curr !== null && curr.key !== key) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    this.#size--;
  }

  print() {
    if (this.#size <= 0) {
      return;
    }

    let curr = this.#head,  toString = '';
    while (curr.next !== null) {
      toString += `(key: ${curr.key}, val: ${curr.val}) -> `;
      curr = curr.next;
    }
    toString += `(key: ${curr.key}, val: ${curr.val})`;
    console.log(toString);
  }

}