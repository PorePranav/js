let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);


const me = {
    name: "Pranav",
    age: 19
};

const friend = me;
friend.age = 20;

console.log("Friend: ", friend)
console.log("Me: ", me)

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
};

//Copying objects
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);