/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt( Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log((Math.pow(a,2))+(Math.floor(d))-true-true); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));                                    ///???

// Use Variables b + d To Get This Valus
console.log(Number.toString()); // 66.67 => String
console.log(); // 67 => Number
console.log((Math.floor(b) / (Math.ceil(d))).toFixed(2)) // 66.67 String
console.log(Math.ceil(b / (Math.ceil(d)))); // 67 Number


/*let b = 2_00.5;

let d = 2.4;*/