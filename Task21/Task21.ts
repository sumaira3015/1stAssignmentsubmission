
const things_Array : string[] = [`person`,`car`,`cold drink`];
// data person object
interface person{
    name : string,
    age : number,
    nationality : string,
    student : boolean
}

// person object

let person : person = {
    name :`Sumaira`,
    age  : 30,
    nationality : `Pakistani`,
    student : true,
}
console.log(person);
// car datatype
interface car{
    maker : string,
    color : string,
    automatic : boolean
}
//  car object
let car : car = {
    maker : `Toyota`,
    color : `Black`,
    automatic : true,
}
console.log(car);