//If we dont want to create an instance that meaning creating an object which calling a method we use static method
class Dog{
    constructor(name, age, breed){
        this.name = name,
        this.age = age,
        this.breed = breed
    }

    constructor(name, age, breed){
        this.name = name,
        this.age = "unknown value",
        this.breed = breed
    }

    bark(){
        console.log("Woof!");
    }

    static desc(){
        //We never use this function in static method
        console.log("This is Dog Class");
    }


}

const dog1 = new Dog("Axel", 10, "German Shepard");
dog1.bark();
Dog.bark(); // We can do this, but this is illegal
Dog.desc(); //This is legal