"use strict";
let Guest = [`tahira`, `najma`, `nusrat`];
for (let i = 0; i < Guest.length; i++) {
    console.log(`Dear Mrs.` + Guest[i] + `,\n\n It is our pleasure to invite you in our party.\n\nThankyou!\n\n `);
}
let absentguest = `nusrat`;
let newguest = `ayesha`;
Guest[2] = newguest;
for (let i = 0; i < Guest.length; i++) {
    console.log(`Dear Mrs.` + Guest[i] + `,\n\n It is our pleasure to invite you in our party.\n\nThankyou! `);
}
console.log(`mrs.${absentguest} is not coming to the party.`);
