const arr = [1,2,3,4,5,6,7];
// const arr = new Array(10);
console.log(arr.length);

// arr.fill("values");

//To check wheather if it is an array 
console.log(Array.isArray(arr));


/*
    These are called mutator functions as they alter the object inside the array
    1. arr.pop() -> removes the last element from array
    2. arr.push(1) -> add the element to the last of the array
    3. arr.shift() -> removes the first element from array
    4. arr.unshift("Hi") -> add the Hi element at the first of the array
    5. arr.splice(2, 2, "Hey");

    Syntax for splice
    array.splice(index_location, no_of_values_to_be_deleted, new_items_to_add(optional)); 
*/





//These are called iterative methods
//pop removes last element
//push add element to last position
arr.pop();
console.log(arr);

arr.push(8);
console.log(arr);

//shift removes first element
//unshift add element to first position

arr.unshift("disco shanthi");
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2,3,'Hey');
console.log(arr);