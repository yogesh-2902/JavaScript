const obj = {
    num : 10,
    print : function(){
        console.log(this.num);
    }
}

obj.print();


//Very Important
var num = 30;
const obj2 = {
    num : 10,
    //Here this is a arrow function, so when we try to use this print function the 'this' points to the object where it was called so we get undefined when we log the num
    print : () => {
        console.log(this.num);
    }
}

obj2.print();


