// ass5
let theName = "Elzero";
//one  
let one=Array.from(theName);
console.log(one);
//two
let two=theName.split("");
console.log(two);
//three
let three=[...new Set(theName)];
console.log(three);
//four
console.log([...theName]);
//five
console.log(Object.assign([], theName));
// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']
console.log("......");

// ass7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
//1
console.log([...numsOne,...numsTwo]);
//2
console.log([...Array.from(numsOne),...Array.from(numsTwo)]);
//3
numsOne.push(...numsTwo);
console.log(numsOne);

// Needed Output
[1, 2, 3, 4, 5, 6]
