"use strict";
// Equqlity and Inequqlity test
console.log("Equality Test With Strings:", "Apple" === "Apple");
console.log("InEquality Test With Strings:", "Apple" !== "oranges");
// Test using Lowercase function
console.log("Test with Lowercase function:", "HELLO".toLowerCase() === "hello");
// numerical test involving equality and inequlity
console.log("Equality test with numbers:", 15 === 15);
console.log("InEquality test with numbers:", 15 != 30);
// Greater than Less than Test
console.log("Greater than Test:", 15 > 10);
// less than Test
console.log("less than Test:", 15 < 20);
// Greater than Equal to  Test
console.log("Greater than Equal to  Test:", 15 >= 15);
// Less than Equal to  Test
console.log("Less than Equal to  Test:", 10 <= 15);
// Test using "and" and "or" operator
console.log("And operator Test:", 15 > 10 && 10 === 10);
// using or operator
console.log("or operator Test:", 15 > 10 || false);
// Test with in Array
const fruits = [`Apple`, `mango`, `banana`];
console.log(`Test "Apple" is in the array:`, fruits.includes("Apple"));
// Test not with in array
console.log(`Testing "oranges" not in array: `, !fruits.includes("oranges"));
