//function statement
// implicit args => this, arguments
function sum(a, b){
    console.log("in sum", this);
    console.log("in sum", arguments);
    return a + b;
}
// function sum(a, b,d,e){
//     console.log("in sum with 4 args");
//     return a + b;
// }

console.log("sum: ", window.sum(3,6));
console.log("sum: ", sum(3,6, 8,9));
console.log("sum: ", sum(3,6,8,9,10));

//function expression
// also receives the implicit args
var add = function(a, b){
    return a + b;
}

console.log("add: ", add(3,6));

//ES6 arrow functions
// does not receive the implicit args
var compute = (x, y)=>{
    return x * y;
}

console.log("compute: ", compute(3,6));

var squareIt = n => n * n;

console.log("squareIt: ", squareIt(11));

var obj = {
    id: 100,
    print: function(){
        console.log("id:", this.id);
        setTimeout(()=>{
            console.log("id after 1 sec:", this.id);
        }, 1000);
    }
}

obj.print();

var emp = {
    id: 200
};

//emp.print();
var empPrint = obj.print.bind(emp);
empPrint();

function bar(x){
    console.log("in bar", this);
    console.log("in bar", x);
}
//bar(5);

bar.bind(obj, 350)();