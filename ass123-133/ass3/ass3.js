let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars1.copyWithin(3));
// Needed Output
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(chars2.sort().copyWithin(0,4,8));
// Needed Output
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars3.copyWithin(2));
// Needed Output
["Z", "Y", "Z", "Y", "A", "D", "E"]
console.log('..............');
//ass8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n1,...n2].length*Math.max(...n2));
// Needed Output
210
