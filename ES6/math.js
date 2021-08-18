console.log("in math.js...");


export function add(a, b){
    console.log("add...");
}

export function multiply(a, b){
    console.log("multiply...");
}

export function divide(a, b){
    console.log("divide...");
}

//export default add;
export default {
    add, multiply, divide
};