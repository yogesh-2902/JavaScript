//Function Instantiation with shared Methods

// Prototype Def -> Every function is js has a property called "Prototype" which is a object


const sharedMethod = {
    eat: function () {
        console.log(`${this.name} is eating!!!`);
    },

    sleep: function () {
        console.log(`${this.name} is sleep!!!`);
    }

}

//If we are use new Keyword to create a object this is happens in code
// function person(name, age){
//     this = Object.create(person.prototype); 
//     this.name = name;
//     this.age = age;

//     return this;
// }

function person(name, age) {
    // const user = {};
    // const user = Object.create(sharedMethod);
    const user = Object.create(person.prototype);

    user.name = name;
    user.age = age;


    // This is allocate extra memory so we use shareMethod object
    // user.eat = function() {
    //     console.log(`${this.name} is eating!!!`);
    // }

    // user.sleep = function() {
    //     console.log(`${this.name} is sleep!!!`);
    // }

    // This can also be reduced to 
    // user.sleep = sharedMethod.sleep;
    // user.eat = sharedMethod.eat;

    return user;
}

// We can use this because this is already built
person.prototype.eat = function () {
    console.log(`${this.name} is eating!!!`);
},

person.prototype.sleep = function () {
    console.log(`${this.name} is sleep!!!`);
}


const yogesh = person("Yogesh J", 23);
const sadsadsad =new person("Yogesh J", 23);
console.log("Yogesh object is ", yogesh);




const parent = {id : 1 , location : "Hyderabad"};
const child = {};

console.log(child.__proto__);
console.log(parent.isPrototypeOf(child));