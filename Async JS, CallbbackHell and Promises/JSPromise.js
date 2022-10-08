//Promises are used to avoid callbackHell
//They are built in classes in JS which helps to work with Async tasks easily

/*
3 stages
Failed
Successful
Pending

*/


//Creation of Promise

const firstPromise = new Promise((resolve , reject) => {
    //Write the code for time consuming task here

    //If task is successful we call resolve
    resolve();

    //If task is failed we call reject
    reject();
});

firstPromise.then(
    //if resolve was called we use this 
    (response) => {
        console.log("First callback " + response);
    },
    //if reject was called we use this
    (response) =>{
        console.log("Second Response " + response);
    })


