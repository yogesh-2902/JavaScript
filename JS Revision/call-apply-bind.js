// Remember a function is also a object

//EVERY METHOD HAS THESE THREE METHODS 
//* 1. call is a method on every function which is used to invoke that function with a different 'this' value
//* 2. call and apply invoke the function immediately

const userOne = {
    name : "Yogesh J"
}

const userTwo = {
    name : "Kiran"
}

function greet(location, state){
    //call helps in specifying to take which as 'this'
    // this -> ???????
    console.log(`Hey how are you?, ${this.name} and I stay in ${location} which is in ${state}`);
}

// //changes the 'this' context;
// greet.call(userOne, "Bangalore", "Karnataka");
// greet.call(userTwo);



// //* 2.apply - call but takes array as a argument
// //* apply will immediately invoke the function
// const paramOne = ["Yogesh J" , 23 , 'Bangalore'];

// function greetUser(){
//     console.log(`Hey , ${this.name}.Your age is ${this.age}, and you stay in ${this.bangalore} `)
// }

// greetUser(userTwo, paramOne);


//* 3 . bind -> This is similarly to call function but the only difference is bind will return us a function which has the same function which has 'this' context
const greetUserOne = greet.bind(userOne, "Bangalore", "Karnataka");
const greetUserTwo = greet.bind(userTwo);

greetUserOne();
greetUserTwo();