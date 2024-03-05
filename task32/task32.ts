// • Make a list of five or more usernames called current_users.
const current_users:string[] = [`Ghulam Murtaza`, `Waqar Irshad`, `Shahbaz`, `Salman`, `Adnan`];

// Make another list of five usernames called new_users

const new_users :string[ ] = [`ali`,`shahbaz`,`kamran`,`Salman`,`wahab`];

//  Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
function checkUserNames(current_users:string[], new_users :string[ ]) : void{
    let lower =  current_users.map(user =>user.toLowerCase());
}
for(const newUser of new_users ) {
    const lowercasedNewUser = newUser.toLowerCase();
    let lower =  current_users.map(user =>user.toLowerCase());


    if( lower.includes(lowercasedNewUser)){
        console.log(`username " ${newUser}", is already taken.Please enter a new username`);
    }else{
        console.log(`username "${newUser} is available`);
    }
}

checkUserNames(current_users,new_users);