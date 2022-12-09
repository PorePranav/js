const pranav = {
    firstName: "Pranav",
    lastName: "Pore",
    age: 2022 - 2003,
    occupation: "student",
};

console.log(pranav);

console.log(pranav.lastName);
console.log(pranav["lastName"]);

const nameKey = "Name";
console.log(pranav["first" + nameKey] + " " + pranav["last" + nameKey]);

const input = prompt("What do you know about Pranav? Choose between firstName, lastName, age and occupation!");

if(pranav[input])
    console.log(`Pranav's ${input} is: ${pranav[input]}`);
else
    console.log(`Pranav doesn't have a ${input} property`);

pranav.location = "India";
pranav['twitter'] = "@pranav_js";