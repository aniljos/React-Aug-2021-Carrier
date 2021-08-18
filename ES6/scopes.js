console.log("in scopes.js");

//global ==> global object(window)

console.log("x", x);
var x = 10; //global, hoisting
//let x = 10; //global, no hoisting
console.log("x", window.x);

var y;
console.log("y", y);


function foo(){

    var z = 10; // function scope
    console.log("in foo", z);
    if(x < 100){
        //var msg = "Hello"; // function scope
        let msg = "Hello"; // block scope
        console.log("msg", msg);
    }
    //console.log("msg", msg);
}
foo();


console.log("App over");