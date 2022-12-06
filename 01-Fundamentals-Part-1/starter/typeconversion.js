//Type conversion
const inputYear = Number('1991');
console.log(Number(inputYear) + 18);

console.log(Number("Pranav")); //NaN
console.log(typeof NaN);

console.log(String(23), 23); //String Number


//Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" + "3"); //+: (Concatenation) -: (Subtraction)

let n = "1" + 1; //11
n -= 1; // 11 - 1 = 10
console.log(n);