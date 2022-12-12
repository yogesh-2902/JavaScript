// Ref - https://medium.com/@monica1109/scheduling-settimeout-and-setinterval-ca2ee50cd99f

/*
setTimeout() triggers the expression only once whilesetInterval() keeps triggering expressionregularly after the given interval of time. (unless you tell it to stop).

To use clearTimeout(argyment) and clearInterval(arguement), the argument is store the value of setTimeout and then pass that as argument
*/

const alertMe = (name, state) => {
    setTimeout(() => {alert(`Hey ${name}, You are from ${state}`)}, 3000, name, state);
}


const consoleInterval = () => {
    setInterval(() => {console.log("Hey")}, 2000);
}


consoleInterval();