/* Static Methods on Promise Constructor -> Any Methods which can be accessed directly on the Promise constrcutor is called a Static method in Promise
Promise.resolve(); //promise has been fulfilled
Promise.reject();  //promise has been rejected

Promise.all(); //this will returns us a array of  promises resolved if all the promises are fulfilled , if any one is rejected then it returns us as rejected
-> Result is always is in array form

Promise.race(); //this will return us a promise which will be settled first, this may be either rejected or fulfilled


// States in Promises
/*
1. pending
2. fulfilled
3. rejected

4. settled

*/

// * Promise.all();

const arrayPromisesWithAllFulfilled = [
    Promise.resolve("Promise 1"),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 5000);
    }),

    Promise.resolve("Promise 3")
];



const promiseResult = Promise.all(arrayPromisesWithAllFulfilled);
promiseResult.then((data) => {
    console.log(data);

    //Result is [Promise 1, Promise 2 , Promise 3]; //But all the result will be displayed in console after 5 seconds
})


const arrayPromisesWithOneReject = [
    Promise.resolve("Promise 1"),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 2");
        }, 5000);
    }),

    Promise.resolve("Promise 3"),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 4");
        }, 2000);
    }),
];

const promiseResult2 = Promise.all(arrayPromisesWithOneReject);
promiseResult2.then((data) => {
    console.log(data);
    //This block will not run as the promise rejected is rejected
}).catch((data) => {
    console.log("Entire Promise has been rejected because of ", data);
    //Note : This will return first rejected only and it will stop
})



// * Promise.race();


const promiseRace = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Race 1 ")
        }, 5000);
    } ),

    Promise.resolve("Immediate Promise"),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise Race 2")
        }, 3000);
    } ),


    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Race 3 ")
        }, 4500);
    } ),
];

const promiseRaceResult = Promise.race(promiseRace);

promiseRaceResult.then((data) => {
    console.log("Promise resolved first is " , data);
}).catch((data) => {
    console.log("Promise rejected first is " , data);
})


//* Promise.any();
//* Promise.allSettled();














/*

const apiPromises = [
    fetch(URL1).then((response) => response.json()), // name
    fetch(URL2).then((response) => response.json()), // {text : "Hey Yogesh"}
    fetch(URL3).then((response) => response.json()) // false
];

const apiResult = Promise.all(apiPromises);
apiResult.then((data) => {
    console.log(data);
     //* data [name, "Hey Yogesh" , false]
})

*/