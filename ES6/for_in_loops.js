//For in loop is used in object
const obj = {a:1,b:2};

for (const key in obj) {
    console.log(`key : ${key} and value : ${obj[key]}`);
}


//returns obj key into array
console.log(Object.keys(obj));

//converts and returns obj into array of key and value pairs
console.log(Object.entries(obj));

 