// console.log("Hello World");

let currentUser;

let personname = document.querySelector('#personName');
let personImage = document.querySelector('#personImage');

const loadNewUser = () => {
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        // return data
        let currentUser = data.result[0];
    });

}
