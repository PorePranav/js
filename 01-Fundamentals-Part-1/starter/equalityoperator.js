const age = 18;
if(age === 18) //true
    console.log("Your age is 18 years!");

if("18" === 18) //false
    console.log("Your age is 18 years!");

if("18" == 18) //true
    console.log("Your age is 18 years!");

const favourite = Number(prompt("What's your favourite number?"))
console.log(favourite);
console.log(typeof favourite);

if(favourite == 9) //true
    console.log("9 is an amazing number!");

if(favourite === 9) //true
    console.log("9 is an amazing number!");
else if(favourite === 7)
    console.log("7 is also an amazing number!");
else
    console.log("Number isn't 7 or 9");

if(favourite !== 9)
    console.log("Why not 9?");