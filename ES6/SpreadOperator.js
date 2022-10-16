// Spread Operator (...)
//Works for both arrays and objects

const arr = [1,2,3];

//usage of spread operator
const newArray = ["a","b",...arr];

console.log(newArray);

const obj1 = {
        name : "Yogesh J",
        age :  23
}

const obj2 = {
    address : {
        city : "Bangalore",
        state : "K'taka"
    }
}

const newObj = {...obj1, ...obj2};
const newObj2 = {...obj1, ...obj2.address.city};

console.log(newObj);
console.log(newObj2);