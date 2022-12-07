//Falsey values are: 0, '', undefined, null, NaN
//Everything else is a truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Pranav"));
console.log(Boolean({}));


const money = 0;
if(money){
    console.log("Don't spend it all!");
}
else{
    console.log("You should get a job!");
}

let height;
if(height){
    console.log("height is defined!");
}
else{
    console.log("height is not defined!")
}