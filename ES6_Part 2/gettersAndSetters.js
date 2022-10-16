//Bad version
const clickCounter = {
    clicks : 10
}

console.log(clickCounter.clicks);
clickCounter.clicks++;
console.log(clickCounter.clicks);


//Improved version using getter and setter
//VERY IMPORTANT -> get even though are declared as a function they are used as a property,
//When we know some property inside a class/object is going to be used then we can use getters and setter to read and write the value
// We can validate the value in getters before writing the value
//We can any other operation on write
const clickCounter2 = {
    _clicks : 10, //This means the value is private

    get clicks(){
        return this.clicks;
    },

    set clicks(value){
        if(value < this.clicks){
            return;
        }else{
            this._clicks = value;
            console.log(clicks);
        }
    }
}

console.log(clickCounter.clicks);
clickCounter.clicks = 15;
console.log(clickCounter.clicks);
