// Write a function that stores information about a car in a Obj

type car ={
    manufacture:string;
    model:string;
    [key:string]:any;
}
function createCar(manufacture:string,model:string,optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar:car = createCar("Toyota","Corolla",{color:"silver",year:"2020"});
console.log(mycar);