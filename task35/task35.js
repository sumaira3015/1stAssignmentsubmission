"use strict";
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
const animals = [`Cat`, `Dog`, `Goat`];
console.log(`list of animals:`);
for (const animal of animals) {
    console.log(animal);
}
// Modify your program to print a statement about each animal,
console.log(`\n Statement about each animal`);
for (const animal of animals) {
    if (animal === `Dog`) {
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === `Cat`) {
        console.log(`A ${animal} is a good companion at home. .`);
    }
    else if (animal === `Goat`) {
        console.log(`A ${animal} is a adorable pet that also give us milk`);
    }
}
// what these animals have in common.
console.log(`what these animals have in common.`);
console.log(`Any of these animals could be a great pet`);
