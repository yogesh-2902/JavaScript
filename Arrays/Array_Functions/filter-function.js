const students = [
    {name : "Yogesh", age : 20 , projectExp : "yes"},
    {name : "Kumar", age : 20 , projectExp : "no"},
    {name : "Ravi", age : 20 , projectExp : "no"},
    {name : "Pooja", age : 20 , projectExp : "yes"},
]


//This will go through each item and will evaluate if it is true or false
const selectedStudents = students.filter((item) => {
    return item.projectExp === "yes";
});

console.log(selectedStudents);