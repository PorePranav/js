'use strict';

const pranav = {
    firstName: "Pranav",
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2022 - this.year);

        //Solution 1
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // };

        //Solution 2
        //Using arrow function as arrow function inherits this from parent block
        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial();
    },
    greet: () =>{
        console.log(this)
        console.log(`Hey, ${this.firstName}`)
    }
};


pranav.greet(); //Undefined as the greet function is arrow function, here this = window, 
                //and it doesn't have firstName variable
pranav.calcAge();


const addExpr = function(a, b){
    console.log(arguments);
    return a + b;
}

addExpr(2, 3);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

addArrow()