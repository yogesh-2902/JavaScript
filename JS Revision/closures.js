/**
 * Closure in JS
 * function inside a function
 * Why do we use closure in JS?
 * ->These are used to create private variables, and make sure any other code does not make changes to the variable
 * 
 * 
 */


//Very good example to explain closures during Interview
 function increasevalue(){
    let value = 0;

    return function increment(){
        console.log(value++);
    }
}

// let result = increasevalue();
let result = increasevalue;
result();


// This cannot be done
//console.log(increasevalue());


//Example 2 
function makeFunc() {
    const name = 'Mozilla';
    return function displayName() {
      console.log(name);
    }
  }
  
  const myFunc = makeFunc();
  myFunc();


//Example 3
  function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5); // x = 5 , y = 2
const add10 = makeAdder(10);// x = 10 , y = 2

console.log(add5(2));
console.log(add10(2));
