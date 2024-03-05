"use strict";
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript
function make_shirt(size = "large", message = "I love typescript") {
    return console.log(`size :${size}, Message :${message}`);
}
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// large shirt defaul message
make_shirt();
make_shirt("medium", "I love typescript");
make_shirt("small", "I love typescript");
