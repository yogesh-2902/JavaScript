/*
    Array Destructing
*/ 

const arr = [1,2,3];

//The below can be written in destructing method like this
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

// we can also refer only 2 values
const [x,y] = arr;
console.log(x);
console.log(y);

/*
    Object Destructing
*/ 

const obj = {key1:1, key2:2,key3:3};

// const key1 = obj.key1;
// const key2 = obj.key2;
// const key3 = obj.key3;


const {key1,key2,key3} = obj;

console.log(key1);
console.log(key2);
console.log(key3);

// we can also refer only 2 values
// const {key1,key2} = obj;

// console.log(key1);
// console.log(key2);