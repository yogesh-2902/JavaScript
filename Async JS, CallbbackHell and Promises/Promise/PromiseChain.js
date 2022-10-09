const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Success");
        reject("Failed");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
    result.concat("2");
    return result += ' 1';
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    //If we get any error in either one of the then block we directly jump into the error block
    //Similarly if we get reject at the promise level we direclty jump into reject
    console.log("In Catch block");
}).finally(() => {
    console.log("This will also be executed");
});
