/*
    Hoisting is applicable only for 2 situations
    1. for variables created using 'var'
    2. It also happens in let and const as well but the variables declared are in temporal dead zone

*/

printSomething();

// This is a function declaration
function printSomething() {
    console.log("Print Something");
}

// The below line is not executed because of hoisting as we cannot find the variable, irrespective if we express the functionan as var or const or let

functionExpression();

const functionExpression = function () {
    console.log("This is a function expression");
}

//This code will run
functionExpression();


