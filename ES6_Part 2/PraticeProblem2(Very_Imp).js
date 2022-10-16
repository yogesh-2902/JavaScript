//very Important Assignmement
class Teacher{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printAge(){
        console.log(this.age);
    }
}

class Instructor extends Teacher{
    constructor(name, age ,batchName){
        super(name,age);
        this.batchName = batchName;
    }
}

class Mentor extends Teacher{
    constructor(name, age ,days){
        super(name,age);
        this.days = days;
        //console.log("Mentor is available for " + this.days + " days.")
    }

    get days(){
        return this._days;
    }

    set days(value){
        if(value >=0 && value <= 7){
            this._days = value;
        }else{
            console.log("Invalid operation");
        }
    }
}



const t1 = new Teacher("King", 23);
const i1 = new Instructor("sad", 23, "Dreamer");
console.log(i1);
const m1 = new Mentor(2);
m1.isAvailable();