let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let newArray = [];
for (i = index; i < friends.length; i++) {
if(typeof friends[i] == "number" || friends[i][counter] == "A") {
continue;
} 
newArray.push(friends[i])
}
for(let i = index; i < newArray.length; i++) { 
console.log(`${i + 1} => ${newArray[i]}`);
}