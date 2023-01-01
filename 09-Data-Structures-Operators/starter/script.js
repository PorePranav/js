'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, menuIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },
  
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);


//Swapping elements without destructing
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Swapping elements with destructing;
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, 4, [5, 6]];
console.log(nested[3]);
console.log(nested[3][0]);
console.log(nested[3][1]);

//Nested destructuring
const [i, , , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r); 