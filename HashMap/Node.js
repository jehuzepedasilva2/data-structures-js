export default class Node {

  key;
  val;
  next;

  constructor(key, val, next=null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }

}