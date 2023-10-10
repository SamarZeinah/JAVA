//third
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(Number(num)+Number(num)); // 20

// Solution Three
console.log(++num + --num - true); // 20

// Solution Four
console.log(num*(true+true)); // 20

                 //######
// Solution five
console.log((+num / +num) * +num + +num); // 20
// Solution six
console.log((+num % +num) + +num + +num); // 20
// Solution seven
console.log(Number(num) + +num); //20



               //four
 let points = 10;

// Write Your Code Here

console.log(++points + true +true); // 13

// Write Your Code Here

console.log(--points - true ); // 8;