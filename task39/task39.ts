//  Write a function called city_country() that takes in the name of a city and its country
// arrow function
const city_country = (city:string , country:string):string =>
{
    return `${city} ,${country}`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned
console.log(city_country("karachi","Pakistan"));
console.log(city_country("newyork","USA"));
console.log(city_country("Delhi","India"));