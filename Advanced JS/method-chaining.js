const arr = [{n:1}, {n:2},{n:3},{n:4},{n:5},{n:6}];

// const evenArray = arr.filter((item) => item.n % 2 === 0);
// console.log(evenArray);

// const evenNumbers = evenArray.map((item) => item.n);
// console.log(evenNumbers);

// const result = evenNumbers.reduce((acc, item) => acc+item, 0);

// console.log(result);



//Same process using method chaining
const result = arr.filter((item) => item.n % 2 === 0)
                  .map((item) => item.n)
                  .reduce((accumulate,item) => accumulate+item, 0);

console.log(result);


//Write a function that looks like this to this using reduce
const objarr = ['a','b','c','d'];

const objresult = objarr.reduce((accumulate, item,index) => {accumulate[index+1] = item;
    return accumulate;
}
, {});

console.log(objresult);




