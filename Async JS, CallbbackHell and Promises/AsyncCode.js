//This is a Asynchronous function where java script will keep the setTimeout function aside and will run the rest of the code and then will return to the setTimeout and run it immediately

setTimeout(() => {
    console.log('Hello 3')
}, 0);

console.log('hello 1');


//Guess the output and explain
let a = 10;
setTimeout(() => {
    a += 20;
});

console.log(a);


