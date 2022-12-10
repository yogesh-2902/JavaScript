/**
 * Closure in JS
 * function inside a function
 * Why do we use closure in JS?
 * ->These are used to create private variables, and make sure any other code does not make changes the variable
 * 
 * Def ->You can call a closure when A function access variables defined outside of it.
 * 
 */


//Very good example to explain closures during Interview
  const food = () => {
    const dish = "Biryani";
    return function () {
      console.log(`${dish} is Yummy!!!`);
    }
  }


  const foodResult = food();
  //console.log(foodResult()); -> This is not correct! This will return undefined
  foodResult();

  // *VERY IMPORTANT - Example where we can use Closures for INTERVIEW
  function loadArray(index){
    const arr = new Array(3000).fill('a');
    console.log("array created");
    return arr[index];
  }

  // const result1 = loadArray(100);
  // console.log(result1)
  // const result2 = loadArray(200);
  // console.log(result2)
  // const result3 = loadArray(1000);
  // console.log(result3)

  function loadArrayClosure() {
    const arr = new Array(3000).fill('a');
    console.log("array created");
    return function(index){
      return arr[index];
    }
  }

  const resultUsingClosure1 = loadArrayClosure();
  console.log(resultUsingClosure1(100));
  console.log(resultUsingClosure1(1000));
/*

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




const users = ["Yogesh J" , "Raghu S", "Manoj"];

const query = "Y"

*/