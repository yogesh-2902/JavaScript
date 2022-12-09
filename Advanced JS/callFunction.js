//call function
const obj = {
    num : 200,
    print : () => {
        console.log(num);
    }
}

obj.print.call(obj);