import LinkedList from "./LinkedList.js";

for (let i = 1; i <= 10; i++) {
  LinkedList.append(i);
  // LinkedList.prepend(-i);
}

console.log('-----------TEST size START-------------');

console.log(LinkedList.toString());
console.log(`Size: ${LinkedList.size}`);


console.log('-----------TEST at--------------');

for (let i = 0; i < LinkedList.size; i++) {
  console.log(`${i+1} at  index: ${LinkedList.at(i).value}`);
}

console.log('-----------TEST removeAt--------------');

for (let i = 0; i < LinkedList.size; i += 2) {
  LinkedList.removeAt(i);
  console.log(`remove at index: ${i}: ${LinkedList.toString()}`);
}

console.log('-----------TEST insertAt--------------');

for (let i = 1; i < LinkedList.size; i += 2) {
  LinkedList.insertAt(i, i);
  console.log(`insert at index: ${i}: ${LinkedList.toString()}`);

}

console.log('-----------TEST pop--------------');

for (let i = 0; i < 3; i++) {
  console.log(`Popped: ${LinkedList.pop()}`);
  console.log(LinkedList.toString());
}

console.log('-----------TEST size END--------------');

console.log(LinkedList.toString());
console.log(`Size: ${LinkedList.size}`);