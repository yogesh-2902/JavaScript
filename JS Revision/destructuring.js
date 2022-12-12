const object = {
    id : 1,
    role : "Developer",
    location : "Bangalore"
}

// Older version
// const id = object.id;
// const role = object.role;

//Using destructuring
// here place is just renaming location
const { id , role , location : place = "Hyderabad"} = object;

console.log({id, role, place});


const user = ["Yogesh J", 23, "Developer"];

const [name, age, profession] = user;

//If we want specific values
const [newUser,  , newProfession] = user;
console.log();