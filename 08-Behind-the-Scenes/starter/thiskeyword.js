'use strict';

console.log(this);

const calcAge = function(birthYear){
    console.log(2022 - birthYear);
    console.log(this);
};

//calcAge(2003)

const calcAgeArrow = birthYear =>{
    console.log(2022 - birthYear);
    console.log(this);
}

calcAgeArrow(2003);

const pranav = {
    year: 2003,
    calcAge: function(){
        console.log(this)
        return 2022 - this.year;
    }
};

console.log(pranav.calcAge())


