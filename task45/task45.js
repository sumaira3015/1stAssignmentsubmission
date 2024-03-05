"use strict";
// Write a function that stores information about a car in a Object
// function car_creation(manufacturer:string, model:string,...properties:[string,any][]):any{
//     const car: any = {
//         manufacturer,
//         model,
//     }
// };
// for(const [key,value] of properties){
//     car[key]= value;
//     return car;
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("Toyota", "Corolla", { color: "silver", year: "2020" });
console.log(mycar);
