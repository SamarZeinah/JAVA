                          //first
let userName = "Elzero";
console.log(userName.slice(3,4)); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName[3]); // e
console.log(userName.substring(3,4)); // e
console.log(userName.substr(3,1)); // e
console.log(userName.charAt(3).repeat(3)); // eee
console.log(userName.substring(3, userName.length -2).repeat(3)); // eee

                         //Second
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True