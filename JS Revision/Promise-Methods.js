// Static Methods on Promise Constructor -> Any Methods which can be accessed directly on the Promise constrcutor is called a Static method in Promise

Promise.resolve();
Promise.reject(); 

Promise.all();

const apiPromises = [
    fetch(URL1).then((response) => response.json()), // name
    fetch(URL2).then((response) => response.json()), // {text : "Hey Yogesh"}
    fetch(URL3).then((response) => response.json()) // false
];

const apiResult = Promise.all((data) => {
    console.log(data); //This will be in the form of array
    // The below is always in array form the result
    // [name, {text : "Hey Yogesh J" , false}]
})