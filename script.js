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

list.insertAt('ostrich', 2);
console.log(list.toString());
console.log(list.size());

list.pop();
console.log(list.toString());
console.log(list.size());

list.removeAt(3);
console.log(list.toString());
console.log(list.size());

list.removeAt(13);
console.log(list.toString());
console.log(list.size());