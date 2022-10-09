// const NUM = 100;

// console.log("Before ERROR!!!");

// NUM = 200;
// console.log("After ERROR!!!");


//We handle error like this
const NUM = 100;

console.log("Before ERROR!!!");



//If error occurs in try then catch will run that part of code 
try {
    NUM = 200;
} catch (error) {
    //Here if we get the error then we go into catch or else wont
    //This part is only executed if we get error in try part
    console.log(error);
} finally {
    //This will run even if there is error or not.
    console.log("This is executed")
}
console.log("After ERROR!!!");