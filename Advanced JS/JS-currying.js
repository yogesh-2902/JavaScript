//currying example, Currying is just a function inside a function or nested functions
const a = (a) => (b) => (c) => a+b+c;

// const a = function(a){
//     return function (b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

const fun1 = a(10);
const fun2 = fun1(20);
const result = fun2(30);
console.log(result);


//Guess output
const fun = (a) =>() => (b) => () => a * b;
console.log(fun(10)(20)(30)(40));

//Ans. 300



