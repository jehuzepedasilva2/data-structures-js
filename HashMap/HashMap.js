import LinkedList from './LinkedList.js';

export default class HashMap {

  #buckets;
  #capacity = 16; //total number of buckets
  #loadFactor = 0.75; // factor that determines when its a good time to grow buckets
  #entries = 0; // the size of this hashmap
  #keys = new Set();

  constructor() {
    this.#buckets = new Array(this.#capacity);
    this.#fillBuckets(this.#buckets, this.#capacity);
  }

  #fillBuckets(buckets, size) {
    for (let i = 0; i < size; i++) {
      buckets[i] = new LinkedList();
    }
  }

  #hash(key, size) {
    key = key.toString();
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % size;
    }
    return hashCode;
  } 

  #resizeBuckets() {
    let newCapacity = this.#capacity * 2
    let newBuckets = new Array(newCapacity);
    this.#fillBuckets(newBuckets, newCapacity);
    this.#keys.forEach(key => {
      const val = this.get(key);
      const newIndex = this.#hash(key, newCapacity);
      newBuckets[newIndex].append(key, val);
    })
    this.#buckets = newBuckets;
    this.#capacity = this.#capacity * 2;
  }

  #isGrowing() {
    return this.#entries >= this.#capacity * this.#loadFactor;
  }

  set(key, value) {
    if (this.#isGrowing()) {
      this.#resizeBuckets();
    }
    const index = this.#hash(key, this.#capacity);
    if (this.#keys.has(key)) {
      this.#buckets[index].update(key, value);
      return;
    } 
    this.#buckets[index].append(key, value);
    this.#keys.add(key);
    this.#entries++;
  }

  has(key) {
    return this.#keys.has(key);
  }

  get(key) {
    const index = this.#hash(key, this.#capacity);
    if (!this.has(key)) {
      return null;
    }
    return this.#buckets[index].getValue(key);
  }

  remove(key) {
    const index = this.#hash(key, this.#capacity);
    if (!this.has(key)) {
      return false;
    }
    this.#buckets[index].remove(key);
    this.#keys.delete(key);
    this.#entries--;
    return true;
  }

  length() {
    return this.#entries;
  }

  clear() {
    this.#fillBuckets(this.#buckets, this.#capacity);
    this.#keys = new Set();
    this.#entries = 0;
  }

  keys() {
    return Array.from(this.#keys);
  }

  values() {
    let vals = [];
    this.#keys.forEach(key => {
      vals.push(this.get(key));
    })
    return vals;
  }

  entries() {
    let entries = [];
    this.#keys.forEach(key => {
      entries.push([key, this.get(key)]);
    })
    return entries;
  }

}