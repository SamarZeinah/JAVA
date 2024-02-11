//ass1
let setOfNumbers=new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);
console.log("..........");

//ass2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let newfrind=Array.from((new Set(myFriends))).sort();
console.log(newfrind);
let newfrind2=[...(new Set(myFriends))].sort();
console.log(newfrind2);
// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
console.log(".............");

//ass3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let mymap=new Map(Object.entries(myInfo));
// myInfo.set(username,"Osama");
// myInfo.set(role,"Admin");
// myInfo.set(country,"Egypt");
console.log(mymap);
console.log(mymap.size);
console.log(mymap.has("role"));
console.log("...........");

//ass4
let theNumber = 100020003000;
let myset=+[...new Set(theNumber.toString())].sort().slice(true).join("");
console.log(myset);
// Needed Output
123






