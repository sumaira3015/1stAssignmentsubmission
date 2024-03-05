// 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// function make_sandwich(...items :string[]):

function  make_sandwich(...items: string[]):void{
    console.log("sandwich ordered:");
    if(items.length === 0){
        console.log(`-you ordered an empty sandwich please add some items`);

    }else{
        items.forEach((item,i )=>{
            console.log(`${i + 1}-${item}`);
        })
    }
    console.log(`\n`);
    // . Call the function three times, using a different number of arguments each time.
}
make_sandwich(`capsicum`,` tamatoes`,`chicken`);
 make_sandwich(`beef`, `cheese`);
 make_sandwich(`tikkah chicken`,`mayou sauce`);