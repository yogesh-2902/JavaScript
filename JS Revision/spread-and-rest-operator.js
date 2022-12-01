const arr1 = [1,2,3];
const arr2 = [1,2,3];

console.log(arr1 == arr2);
console.log(arr1 === arr2);
//Result is both false, because when we compare two non-primitive datatypes, we compare there memory locations or memory references




const numbers = [1,2,3,4,5];

//This is a spread operator

//Use case 1
//Spread the values the array to spread inside a function call
console.log(...numbers);

//Use case 2
const numbers2 = [3,2,4,5,6];
console.log(...numbers2, "Yogesh J", ...numbers);

//Use case 3
const string = "Yogesh J";
console.log(...string);

//Use case 4
const obj1 = {id : 1, name : "Yogesh J"};
const obj2 = {...obj1 , id:20, location:"Bangalore", phone : 12345};
//Here we see override id 1 by id 20 because both have the same keys.
console.log(obj2);

