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

  openingHours: {
    thu: {
        open: 12,
        close: 22
    },

    fri:{
        open: 11,
        close: 23
    },

    sat:{
        open: 0,
        close: 24
    }
  },

  orderDelivery: function({time = "20:00", address, mainIndex = 0, starterIndex = 0}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered on ${time}, at ${address}.`);
  }
  
};

restaurant.orderDelivery({
  // time: "22:30",
  address: "Some random address",
  // mainIndex: 2,
  // starterIndex: 2
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const {menu = [], starterMenu: starters = [], mainMenu} = restaurant;
console.log(menu, starters, mainMenu); 

//Mutating variable (chaning their values)

let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14
};

({a, b} = obj);
console.log(a, b);

//Nested objects

const {fri: {open, close}} = openingHours;
console.log(open, close);