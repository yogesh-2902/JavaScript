//ES5 Method
function Dog(name, age, breed) {
    this.name = name,
    this.age = age,
    this.breed = breed
}


//ES6 Method new Method
class Dog {
    //Constructor function which creates a object when a new object is created
    constructor(name, age = "unknown", breed) {
        this.name = name,
            this.age = age,
            this.breed = breed
    }
}

const dog1 = new Dog("Axel", 10, "German Shepard");
const dog2 = new Dog("Beesto", 10, "Pitbull");
console.log(dog1.name);
console.log(dog2);