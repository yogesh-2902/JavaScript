//VERY VERY IMPORTANT PROBLEM
//Generate New Employee


//1. Approach 1
function generateEmployee1(name, id, dept){
    const obj = {
        };

        obj.name = name;
        obj.id = id;
        obj.dept = dept;

        return obj;
}


// 2. Approach 2
function generateEmployee2(id,name, dept){
    const obj = {
        _id : id,
        _name : name,
        _dept : dept
    }

    return obj;
}


// 3. Approach 3
const generateEmployee3 = (id,name, dept) => {
   return obj = {
        _id : id,
        _name : name,
        _dept : dept
    }
}


// 4. Approach 4 (Tricky one)
//*** Notice that we are using ------------>() below this is because to make the js engine recognize that the flower brackets are of objects
const generateEmployee4 = (id,name, dept) => /*Here*/({
        _id : id,
        _name : name,
        _dept : dept
});



//5. Property shorthand -> IF PROPERTY NAME IS SAME AS VARIABLE NAME WE CAN WRITE LIKE THIS
const generateEmployee5 = (id,name,dept) => ({id,name,dept});

console.log(generateEmployee1("Yogesh", 1, "Full Stack"));
console.log(generateEmployee2("Yogesh", 1, "Full Stack"));
console.log(generateEmployee3("Yogesh", 1, "Full Stack"));
console.log(generateEmployee4("Yogesh", 1, "Full Stack"));
console.log(generateEmployee5("Yogesh", 1, "Full Stack"));