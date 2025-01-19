import { LinkedList } from "./list.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
console.log(list.size());

list.prepend("frog");
console.log(list.toString());
console.log(list.size());

console.log(list.headNode().value);
console.log(list.tailNode().value);

console.log(list.at(3).value);

list.pop();
list.pop();
console.log(list.toString());

console.log(list.contains('giraffe'));
console.log(list.contains('cat'));