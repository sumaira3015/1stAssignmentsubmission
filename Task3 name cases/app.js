"use strict";
let personName = "Sumaira";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\sw/g, c => c.touppercase()));
