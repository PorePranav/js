const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Removing an element
let popped = friends.pop();
console.log(friends);
console.log(popped);

popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //-1

console.log(friends.includes("Bob")); //Strict equality is used

if(friends.includes("Steven"))
    console.log("You have a friend named Steven!");