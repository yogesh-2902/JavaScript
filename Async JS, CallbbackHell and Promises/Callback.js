//Callback is just a function which is provided as an argument to another function
//IMPORTANT : This is a Higher order Function - Which returns or takes another function as argument then the function is called Higher Order Function

function complexAdd(num1,num2, callback){
    sum = num1+num2
    //let us assume the above addition is a complex or time consuming function, so we are providing a callback which is a function which talkes the result of the function and does an operation with the result

    callback(sum);
}

complexAdd(10,20,function printResult(result){
    console.log('Result is ' + result);
});


//This can be used for interview to explain the concept of Callbacks
//What is the output of this function and explain how? 
let a = 10;

function say(callback){
    callback();
    console.log(a);
}

say(function (){
    let a = 20;
    console.log(a);
});

Ans : 20 
      10


    //Guess the output

      let str = "abc";

      function say(callback){
          str = str + "xyz"; // abcxyz
          callback(str + '123');
      }
      
      // say(function(){
      //     console.log(str);
      // });
      
      say(function(){
          console.log(str);
      });