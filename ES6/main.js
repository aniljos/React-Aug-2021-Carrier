console.log("in main.js...");

import math from './math.js';
import {add, divide} from './math.js';

math.add(2,3);
math.multiply(3,4);

add();
divide()

//spread operator

let numbers = [1,2,3,4,5,6,7];
let copy = [...numbers];

console.log("copy", copy);
numbers.push(8);
console.log("numbers", numbers);
console.log("copy", copy);

let data = [20,30,40]
let merge = [...numbers, ...data, 200, 400]
console.log("merge", merge);

let user = {id: 1, name: "Anil"};

let userCopy = {...user};
console.log("userCopy", userCopy);

// Object.assign()


