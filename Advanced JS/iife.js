// Immediately Invoked Function Expression (IIFE)  => These were used earlier to make scope private

(function(num){
    console.log("This is an IIFE function " + num);
})(20);


//Normal function
function printNumber(num){
    console.log("Normal function " + num);
}

printNumber(20);


//Click counter using IIFE (Very Important)
const clickCounter = ( () => {
    let _clicks = 0;

    const updateClick = () => {
        _clicks++;
    } 

    const getClicks = () => {
        console.log("Click count is " + _clicks);
    }

    return {
        updateClick,
        getClicks
    }
})();

clickCounter.getClicks();
clickCounter.updateClick();
clickCounter.updateClick();
clickCounter.updateClick();
clickCounter.updateClick();
clickCounter.getClicks();

const a = 40;
(function(a){
    console.log(a);
})(20);

let b = (function(a){
    return a;
})(20);

console.log(b);

let c= (function(a){
    return {a};
})(20);

console.log(c);