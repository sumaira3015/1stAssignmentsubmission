// Assignment 31: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// •If the list is empty, print the message We need to find some users!

import { report } from "process";

// Non empty array  case
let userNames2:string[] = [`Muhammad adnan`,`Muhammad waqar`,`Muhammad shahbaz`,`Ghulam murtaza`,`admin`];

// Empty array case
//  userNames2  = [ ];
// functional case
if(userNames2.length > 0) {
for( let i=0 ; i < userNames2.length ;i++){
    if(userNames2[i] === `admin`){
        console.log(`\nHello  ${userNames2[i]},would you like to see status  report?\n`);
    }else{
        console.log(`Hello  ${userNames2[i]},thankyou for logging in again`);
    }}}
else{
    console.log(`we need to find some users!`);
}
