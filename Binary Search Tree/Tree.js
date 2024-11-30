import Node from './Node.js';

export default class Tree {

  #root;
  #size;
  #identityFunction;

  constructor() {
    this.#root = null;
    this.#size = 0;
    this.#identityFunction = (val) => val;
  }

  #insertHelper(root, value) {
    if (root === null) {
      this.#size++;
      return new Node(value);
    }
    if (value < root.value) {
      root.left = this.#insertHelper(root.left, value);
    } else {
      root.right = this.#insertHelper(root.right, value);
    }
    return root;
  }

  insert(value) {
    if (this.find(value)) {
      return this.#root;
    }
    this.#root = this.#insertHelper(this.#root, value);
    if (!this.isBalanced()) {
      this.rebalance();
    }
    return this.#root;
  }

  #getSuccessor(node) {
    if (!node) return null;
  
    // Case 1: If node has a right child, find the leftmost node in the right subtree
    if (node.right) {
      let current = node.right;
      while (current.left) {
        current = current.left;
      }
      return current;
    }
  
    // Case 2: If no right child, find the lowest ancestor for which the node is in the left subtree
    let successor = null;
    let current = this.#root; // Assuming `#root` is the root of the tree
    while (current) {
      if (node.value < current.value) {
        successor = current;
        current = current.left;
      } else if (node.value > current.value) {
        current = current.right;
      } else {
        break;
      }
    }
  
    return successor;
  }
  
  #deleteItemHelper(root, value) {
    if (!root) return null;
  
    if (value < root.value) {
      // Go to the left subtree
      root.left = this.#deleteItemHelper(root.left, value);
    } else if (value > root.value) {
      // Go to the right subtree
      root.right = this.#deleteItemHelper(root.right, value);
    } else {
      // Node to be deleted found
  
      // Case 1: Node is a leaf
      if (!root.left && !root.right) {
        return null;
      }
  
      // Case 2: Node has only one child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
  
      // Case 3: Node has two children
      const successor = this.#getSuccessor(root);
      root.value = successor.value; // Replace value with successor's value
      root.right = this.#deleteItemHelper(root.right, successor.value); // Delete successor
    }
  
    return root;
  }
  
  deleteItem(value) {
    this.#root = this.#deleteItemHelper(this.#root, value);
    if (!this.isBalanced()) {
      this.rebalance();
    }
    return this.#root;
  }  

  #buildTreeHelper(array) {
    if (array.length === 0) {
      return;
    }
    const mid = Math.floor(array.length / 2);
    this.#root = this.#insertHelper(this.#root, array[mid]);
    const left = array.slice(0, mid);
    const right = array.slice(mid+1);
    this.#buildTreeHelper(left);
    this.#buildTreeHelper(right);
  }

  #processArray(array) {
    const uniqueSet = new Set(array);
    const uniqueArray = [...uniqueSet];
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
  }

  buildTree(array) {
    const uniqueArray = this.#processArray(array);
    this.#buildTreeHelper(uniqueArray);
    return this.#root;
  }

  #prettyPrintHelper(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.#prettyPrintHelper(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.#prettyPrintHelper(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  prettyPrint() {
    this.#prettyPrintHelper(this.#root);
  }

  #findHelper(root, value) {
    if (root === null) {
      return root;
    }
    if (root.value === value) {
      return root;
    } else if (value < root.value) {
      return this.#findHelper(root.left, value);
    } else {
      return this.#findHelper(root.right, value);
    }
  }


  find(value) {
    return this.#findHelper(this.#root, value);
  }

  levelOrder(callback=this.#identityFunction) {
    let values = []
    if (this.#root === null) {
      return values;
    }
    const root = this.#root;
    let queue = [root];
    while (queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        values.push(callback(node.value));
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
    return values;
  }

  #inOrderHelper(root, callback) {
    if (root === null) {
      return [];
    }
    return this.#inOrderHelper(root.left, callback).concat([callback(root.value)]).concat(this.#inOrderHelper(root.right, callback));
  }

  inOrder(callback=this.#identityFunction) {
    return this.#inOrderHelper(this.#root, callback);
  }

  #preOrderHelper(root, callback) {
    if (root === null) {
      return []
    }
    return [callback(root.value)].concat(this.#preOrderHelper(root.left, callback)).concat(this.#preOrderHelper(root.right, callback));
  }

  preOrder(callback=this.#identityFunction) {
    return this.#preOrderHelper(this.#root, callback);
  }

  #postOrderHelper(root, callback) {
    if (root === null) {
      return []
    }
    return this.#postOrderHelper(root.left, callback).concat(this.#postOrderHelper(root.right, callback)).concat([callback(root.value)]);
  }

  postOrder(callback=this.#identityFunction) {
    return this.#postOrderHelper(this.#root, callback);
  }

  height(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  #depthHelper(root, node, d=0) {
    if (root === null) {
      return -1;
    }
    if (root === node) {
      return d;
    }
    
    const left = this.#depthHelper(root.left, node, d + 1);
    if (left !== -1) {
      return left;
    }
    const right = this.#depthHelper(root.right, node, d + 1);
    return right;
  }
  
  depth(node) {
    return this.#depthHelper(this.#root, node);
  }

  #isBalancedHelper(root) {
    if (root === null) {
      return [true, 0];
    }
    const [left, hl] = this.#isBalancedHelper(root.left);
    const [right, hr] = this.#isBalancedHelper(root.right);
    return [left && right && Math.abs(hl - hr) <= 1, Math.max(hl, hr) + 1];
  }

  isBalanced() {
    return this.#isBalancedHelper(this.#root)[0];
  }

  rebalance() {
    const ordered = this.inOrder(this.#identityFunction);
    this.#root = null;
    this.buildTree(ordered);
  }
}