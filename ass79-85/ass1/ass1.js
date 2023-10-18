// Ass 1
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
    return `My Name Is ${member["name"]}, My Age Is ${member.age}, I Live In 
    ${this.country}`;
    },
    };
    console.log(member.name); // Elzero
    console.log(member.age); // 38
    console.log(member.country); // Egypt
    console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt
    console.log(`.............`);

    //Ass2
    // M One
objMethodOne = {
    property: "Method One",
    };
    console.log(objMethodOne.property); 
    // M Two
    let objMethodTwo = {};
    objMethodTwo.property = "Method Two";
    console.log(objMethodTwo.property); 
    // M Three
    let objMethodThree = {
    property: "Method Three",
    };
    console.log(objMethodThree.property); 
    // M Four
    let objMethodFour = Object.create({
    property: "Method Four",
    });
    console.log(objMethodFour.property); 
    console.log(`.............`);

    //Ass3

    let a = 1;
let threeNums = {
b: 2,
c: 3,
d: 4,
};
let twoNums = {
e: 5,
f: 6,
};
let finalObject = Object.assign({ a: 1 }, threeNums, twoNums);
console.log(finalObject);
// a: 1 b: 2 c: 3 d: 4 e: 5 f: 6 