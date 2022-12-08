'use strict';

function logger(){
    console.log("My name is Pranav!");
}

logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    return `Juice with ${apples} apples and ${oranges} oranges!`;
}

console.log(fruitProcessor(3, 4));
console.log(fruitProcessor(8, 2));

console.log(calcAge1(2003));

//function declaration
function calcAge1(birthYear){
    return 2022 - birthYear;
}


//function expression
let calcAge2 = function(birthYear){
    return 2022 - birthYear;
}
console.log(calcAge2(2003));

//Arrow function
const calcAge3 = birthYear => 2022 - birthYear; 

console.log(calcAge3(2003));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    return `${firstName} has ${65 - age} years until retirement!`;
}

console.log(yearsUntilRetirement(2003, "Pranav"));

