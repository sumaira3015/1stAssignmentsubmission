let personName : string = "Sumaira";
console.log("lowercase:",personName.toLowerCase()) ;
console.log("uppercase:",personName.toLocalUpperCase()) ;
console.log("titlecase:",personName.replace(/\sw/g,c=>c.touppercase())) ;