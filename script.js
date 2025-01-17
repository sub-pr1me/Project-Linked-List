import { LinkedList } from "./list.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.prepend("frog")
list.prepend("mouse")
console.log(list.toString());

console.log(list.size());