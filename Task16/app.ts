let Guest :string[] =[ `tahira`,`najma`,`nusrat`];
let absentguest :string = `nusrat`;
let newguest :string = `ayesha`;
Guest[2] = newguest ;
 for (let i=0 ; i<Guest.length; i++){
console.log(`Dear Mrs.` +  Guest[i] +  `,\n\n It is our pleasure to invite you in our party.\n\nThankyou! `);
 }
console.log(`mrs.${absentguest} is not coming to the party.`)
console.log(`Good News! we find big table so we are inviting 3 more guest`);
Guest.unshift(`mahnoor`);
Guest.splice(2,0,`aqsa`);
Guest.push(`aliza`);
for (let i=0 ; i<Guest.length; i++){
   console.log(`Dear Mrs.` +  Guest[i] +  `,\n\n It is our pleasure to invite you in our party.\n\nThankyou! `);
}

