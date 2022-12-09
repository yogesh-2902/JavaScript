
const promiseObject = new Promise((resolve, reject) => {
    let tacosFound = true;

    // setTimeout(() => {
    //     resolve("Dude, I found the Tacos!!!!"); 
    // }, 5000);

    setTimeout(() => {
        reject("Dude, I  could not find the Tacos :( !!!!"); 
    }, 5000);

});


//Success callback, which will be called when promise has been fulfilled
promiseObject.then((textMessage) => {
    console.log(textMessage);
    console.log(promiseObject);
})

//Failure callback, which will be called when promise has been fulfilled
promiseObject.catch((textMessage) => {
    console.log(textMessage);
    console.log("No worries, I will prepare the pasta!!!");
    console.log(promiseObject);
})

console.log(promiseObject);