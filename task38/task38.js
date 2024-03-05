"use strict";
// Write a function called describe_city() that accepts the name of a city and its country. 
function describe_city(city, country = "unknown country") {
    console.log(`city:${city} is in ${country}`);
}
// Call your function for three different cities, 
describe_city("Karachi", "pakistan");
// using default country
describe_city("newyork");
describe_city("Berlin", "Germany");
