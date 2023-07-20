import CodersArray from "./CodersArray/CodersArray.js";

const names = new CodersArray("albert", "joan");
const numbers = new CodersArray(3, 8, 10, 2);

console.log(names);

numbers.push(22, 44);
console.log(numbers);
