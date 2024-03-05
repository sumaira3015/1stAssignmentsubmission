// Great Magicians: Start with a copy of your program from Exercise 41
const magicianNames: string[] =[ `Harry potter`, `David Copperfield`, `Hermi Granger`,`Professor Albus Dumbledore`,`Ron Wasley`];
// . Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name

function show_magicians(magicians:string[]):void
 {
    for(const magician of magicians){
        console.log(magician);
    }
 }

 function make_great(magicians:string[]):string[] {
const greatmagicians: string[]= magicians.map(magician => `The great ${magician}`);
return greatmagicians;
 }
// Call show_magicians() to see that the list has actually been modified.
// modify the array to add great to each magician
const greatMagicianNames:string[]= make_great(magicianNames);

// call function show original magician names
console.log(`The original magicians:`);
show_magicians(magicianNames);
// call the function to great magician names

console.log(`\n the great magician Names`);
show_magicians(greatMagicianNames);