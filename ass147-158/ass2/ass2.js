// ass4
let myStr = "Elzero";
String.prototype.addLove=function(val){
return `I Love ${this} Web School`;
}
console.log(myStr.addLove()); // I Love Elzero Web School
console.log(".............");

// ass5
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};
Object.defineProperties (myObj,{
    id:{
        writable:true,
        enumerable:false,
        configrable:true,

    },
    score:{
        writable:false,
        enumerable:true,
        configrable:true,
    }
});
delete myObj.country;

myObj.score = 500;
for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

  // Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}