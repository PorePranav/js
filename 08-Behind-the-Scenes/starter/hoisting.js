'use strict';

//Variables

console.log(me);
// console.log(job);
// console.log(year);

var me = "Pranav"
let job = "Developer"
const year = 2003

//Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b){
    return a + b;
}

let addExpr = function(a, b){
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
}

if(!numProducts) deleteShoppingCart();

var numProducts = 10

function deleteShoppingCart(){
    console.log("All products deleted!")
}

var x = 1;
let y = 2;
const z = 3;