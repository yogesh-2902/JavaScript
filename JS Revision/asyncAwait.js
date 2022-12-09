// Whenever we use async we return the value as a promise



const URL = "https://jsonplaceholder.typicode.com/todos/1";

//This is using async await
// YOU ALWAYS AWAIT A PROMISE
//async functions always return a promise
// async function promiseFunction() {
//     console.log("Before Await")
//     const response = await fetch(URL);
//     console.log("This is using aync await", response);
//     const data = await response.json();
//     console.log("This is using aync await", data);
// }

// console.log("Before Function Call");
// promiseFunction();
// console.log("After Function Call");



// This is using promise
const result = fetch(URL)
    .then((response) => { return response.json() })
    .then((data) => {
         console.log(data);
         });


console.log(result);