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