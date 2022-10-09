/* Things to remember about JSON
1. It has 2 functions 1. JSOn.parse();
                      2. JSON.stringfy();
2. It doesnt support functions     (Meaning it will not store the functions)
3. Datatypes supported by JSON - Arrays, Objects, String, boolean, number,null
*/



// name : Yogesh J
// age : 23


// //This in a XML Format
// <contact>
//     <name>Yogesh J</name>
//     <age>23</age>
// </contact>

// Since JSON became popular we started using JSOn instead of XML Format
// JSON - Java Script Object Notation - Its is a Data exchange format based on Javascript object
//It basically a string that looks exactly like JS object


// This is JSON Format
const contact = `{
    "name" : "Yogesh J",
    "age" :     23
}`

//JSON.parse -> Converts string into JSON Object

const contactJson = JSON.parse(contact);
console.log(contactJson);
console.log(contactJson.age);

//We can add other info into that by using
contactJson.address = {
    "no": 52,
    "street": "5th Cross"
};

console.log(contactJson);


//Convert back to string
//Note : null and 2 are not required.That is just to make is readable in console
const newJson = JSON.stringify(contactJson, null, 2);
console.log(newJson);