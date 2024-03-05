// Magicians: Make a array of magician’s names
const magicianNames: string[] =[ `Harry potter`, `David Copperfield`, `Hermi Granger`,`Professor Albus Dumbledore`,`Ron Wasley`];

// Pass the array to a function called show_magicians(), 
 function show_magicians(magicians:string[]):void
 {
    for(const magician of magicians){
        console.log(magician);
    }
 }
//  call the function
show_magicians(magicianNames);