//Assignment One
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,-1)); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends.slice(myFriends.length - myFriends.length, num-myFriends.length));
// Method 2
myFriends.splice((myFriends.length - num - num) , myFriends.length - num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"]
console.log(`...............`);


//Assignment Two
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]
console.log(`...............`);


//Assignment three
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
console.log(`...............`);

//Assignment Four
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO
console.log(`...............`);

//Assignment Five
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
//method one
console.log(haystack.includes(needle));
//method two
if(haystack[1]===needle)
{
    console.log(`found`);
}
else
{
    console.log(`Not Found`);
}
//method three
if(haystack.indexOf(needle)!=-1)
{
    console.log(`found`);
}
else
{
    console.log(`Not Found`);
}
//method four
if (haystack[1] === "JS") 
{
    console.log(`found`);
}
else
{
    console.log(`Not Found`);
}
//method five
if(haystack.includes("JS"))
{
    console.log(`found`);
}
else
{
    console.log(`Not Found`);
}
console.log(`...............`);


//Assignment Six
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
let two=allArrs.concat(arr1,arr2);
let three=two.sort();
let four=three.splice(-3,4);
console.log(four); // fxy