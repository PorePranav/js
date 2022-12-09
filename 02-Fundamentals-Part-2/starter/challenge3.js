const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: "78",
    height: "1.69",
    
    calcBMI: function(){
        return this.mass / (this.height * this.height);
    },

    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: "92",
    height: "1.95",
    
    calcBMI: function(){
        return this.mass / (this.height * this.height);
    },

    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

higherBMIPerson = mark.calcBMI() > john.calcBMI() ? mark : john;

console.log(`${mark.calcBMI() > john.calcBMI() ? mark.fullName() : john.fullName()} (${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()}) has higher BMI than ${mark.calcBMI() < john.calcBMI() ? mark.fullName() : john.fullName()} (${mark.calcBMI() < john.calcBMI() ? mark.calcBMI() : john.calcBMI()})`);


