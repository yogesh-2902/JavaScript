class Car{
    constructor(streering, wheels){
        this.streering = 1;
        this.wheels = wheels;
    }
}

const car = new Car(4);
console.log(car);

//Inheritance -> which is used to get some properties from which it has been inherited
class Honda extends Car{

}

const hondaCar = new Honda();
console.log(hondaCar);