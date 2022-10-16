//Rest Operator 
/*
    Rest operator is a way to pass multiple values as arguments to a argument function
    '...' -> It basically converts multiple arguments into a single array
*/

function printNumbers(...numbers){
    console.log(numbers);

    let sum = numbers.reduce((sum,num) => sum+num, 0 );
    return sum;
}

console.log(printNumbers(1,2,3,4,5));

function multiplyAndAdd(mul1,mul2,...c){
    console.log(mul1);
    console.log(mul2);
    let sum = c.reduce((sum,number) => sum + number, 0);
    sum *= mul1;
    sum *= mul2;

    return sum;
}

console.log(multiplyAndAdd(10,20,1,2,3,4,5)); //3000


