"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
const favorite_pizza = ["Fajita", "Bbq chicken ", "Malai tikkah"];
// use a for loop to print the name of each pizza.
console.log("My Favourite Pizzas are: ");
for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(favorite_pizza[i]);
}
// print a line for each pizza
console.log(`\n I like these pizzas:`);
for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(`I like  ${favorite_pizza[i]}  pizza`);
}
// an additional sentence, such as I really love pizza!
console.log(`\nI really love pizza!`);
