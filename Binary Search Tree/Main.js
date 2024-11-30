import Tree from './Tree.js';

const test = new Tree();
const defaultCallback = (val) => val;
const squareCallback = (val) => val * val;
const doubleCallback = (val) => val * 2;
const callback = squareCallback;

// const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 10, 11, 12];
const array = [1, 2, 3, 4, 5];

const tree = test.buildTree(array);
test.prettyPrint();
// const toDel = test.find(2);
test.deleteItem(5);
test.prettyPrint();
test.deleteItem(3);
test.prettyPrint();
// console.log('-----TEST inOrder------')
// console.log(test.inOrder());
// console.log('-----TEST preOrder------')
// console.log(test.preOrder(callback));
// console.log('-----TEST postOrder------')
// console.log(test.postOrder(callback));
// console.log('-----TEST levelOrder------')
// console.log(test.levelOrder(callback));
// console.log('-----TEST height------')
// console.log(test.height(tree.left));
// console.log('-----TEST depth------')
// console.log(test.depth(tree.right));
// console.log('-----TEST isBalanced------')
// console.log('unbalance tree');
// for (let i = 13; i < 18; i++) {
//   test.insert(i);
// }
// test.prettyPrint();
// console.log(`check balance: ${test.isBalanced()}`);
