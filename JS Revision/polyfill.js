//VERY IMPORANT FOR INTERVIEW

// 1.MAP POLYFILL
// const array = [1,2,3,4,5];

/*
const mapFunction = function (callback){
    const newArray = [];

    for(let i = 0; i<this.length; i++){
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

Array.prototype.mapFunction = mapFunction;

const result = array.mapFunction((item, index, array) => {
    return item*2;
});

console.log(result);

*/


// 2. FILTER POLYFILL
const array = [1,2,3,4,5];

const result = array.filter((item, index, array) => {
    return item % 2 === 0;
});

const filterFunction = function (callback){
    const newArray = [];

    for(let i =0; i<this.length; i++){

        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }

    return newArray;
} 

Array.prototype.filterFunction = filterFunction;

const result2 = array.filterFunction((item, index, array) => {
    return item % 2 === 0;
});

console.log(result);

// 3. REDUCE POLYFILL

