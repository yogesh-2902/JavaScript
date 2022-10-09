const obj = {
    name : "Yogesh J",
    age : 23,
    address : {
        No : 52,
        area : "zyz",
        state : "Karnataka"
    }
}
try{
    //We write the code which may face errors
    console.log(obj.addrss.state);
}
catch(error){
    console.log(error);
}

obj.address.area = "abc";
console.log(obj.address.area);