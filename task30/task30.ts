// Make a array of five or more usernames, including the name 'admin'. 
const userNames:string[] = [`Muhammad adnan`,`Muhammad waqar`,`Muhammad shahbaz`,`Ghulam murtaza`,`admin`];
// Loop through the array, and print a greeting to each user:
//  If the username is 'admin', print a special greeting
function greetusers():void { 
for (const i in userNames){
    if (userNames[i] .toLowerCase()=== `admin`){
        console.log(` Hello admin, would you like to see a status report?`);
    }else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}
}
greetusers();
// • Otherwise, print a generic greeting