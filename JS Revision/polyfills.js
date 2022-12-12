//arr.map()

const arr = [1, 2, 3, 4, 5];

const polyFillMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }

    return arr;
}

Array.prototype.polyFillMap = polyFillMap;

const resultMap = arr.polyFillMap((item) => item * 3);

console.log(resultMap);



//! ********************************************************************************************

//arr.filter();

const filterPolyFill = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i]);



        }
    }


    return arr;
}

Array.prototype.filterPolyFill = filterPolyFill;

const resultFilter = arr.filterPolyFill((item) => item % 2 == 0);

console.log(resultFilter);


// ! *****************************************************************************

// arr.reduce();

const reducePolyFill = function (callback, initalValue) {
    let acc = initalValue;
    for(let i =0; i<this.length; i++){
        if(acc !== undefined){
            acc = callback.call(undefined, acc, this[i], i , this);
        }else{
            acc = this[i];
        }
    }
    return acc;
}

Array.prototype.reducePolyFill = reducePolyFill;

const resultReduce = arr.reducePolyFill((acc,item) => acc+item,0);

console.log(resultReduce);


// ! *******************************************************

// arr.forEach()


const forEachPolyFill = function (callback, context) {
    for(let i =0; i<this.length; i++){
        callback.call(context, this[i], i, this);
    }
}

Array.prototype.forEachPolyFill = forEachPolyFill;

const resultForEach = arr.forEachPolyFill((item) => item*10);

console.log(resultForEach);
