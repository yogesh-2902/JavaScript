//Types of http request - verbs This can also used to make REST API
// get - Get Object
// post - Put Object
// delete - Delete Object
// put - Replace entire Object
// patch - Only replace some parts of object

const URL = "https://jsonplaceholder.typicode.com/todos/1";

fetch(URL).then((response) => {
    //returns us a promise again
    console.log(response); //This response is also a promise so we have to return it.
    return response.json();

}).then((data) => {
    console.log(data);
})

// ! VERY IMPORTANT
// fetch() -> returns a promise
// response.json() -> returns a promise

//Same code in another format
// There are another argument which is an object
//header is some extra information about the request
fetch(URL, {method : "GET" //This is default
    , header : {Application : "application/json"} }) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });


fetch(URL, {method : "POST",
            body : JSON.stringify({name : "Yogesh J"})}) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

