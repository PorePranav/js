const pranav = {
    firstName: "Pranav",
    lastName: "Pore",
    birthYear: 2003,
    occupation: "student",
    hasDriversLicense: true,

    calcAge: function(){
        this.age = 2022 - this. birthYear;
        return this.age;
    },

    summarize: function(){
        return `${this.firstName} is a ${this.age} years old ${this.occupation} and he has ${this.hasDriversLicense ? "a": "no"} driver's license!`;
    }
};

console.log(pranav.calcAge());
console.log(pranav.summarize());