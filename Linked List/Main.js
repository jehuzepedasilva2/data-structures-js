import LinkedList from "./LinkedList.js";

for (let i = 1; i <= 5; i++) {
  LinkedList.append(i);
  LinkedList.prepend(-i);
}

console.log(LinkedList.toString());
console.log(LinkedList.size);

for (let i = 0; i < LinkedList.size; i++) {
  console.log(LinkedList.at(i).value);
}

for (let i = 0; i < 5; i++) {
  console.log(LinkedList.pop());
  console.log(LinkedList.toString());
}