// ass1
console.log(Date.parse("Dec 8 01"));
let myDate=new Date(1007762400000);
console.log(myDate);
console.log(`${myDate/1000}Seconds`);
console.log(`${myDate/1000/60}Minutes`);
console.log(`${myDate/1000/60/60}Hours`);
console.log(`${myDate/1000/60/60/24}Days`);
console.log(`${myDate/1000/60/60/24/365}Years`);
console.log(".................");

// ass2
let startDate=new Date(1980 ,0, 1,0,0,1 );
console.log(startDate); //Sat Feb 24 2024 14:31:05 GMT+0200
console.log(".................");

// ass3
let mydate=new Date();
mydate.setDate(0);
console.log(mydate);
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    ];
console.log(`Previous Month Is${months[0]} And Last Day Is ${mydate.getDate()}`)
console.log(".................");

//ass4
// Needed Output
let birthday=new Date("Dec, 8,2001 ");
console.log(birthday);

let birthday1=new Date(2001,11,8);
console.log(birthday1);

let birthday2=new Date("2001-12");
birthday2.setDate(8);
console.log(birthday2);

let birthday3=new Date("2001-12-08T00:00:00");
console.log(birthday3);
console.log(".................");


// ass5
let start= performance.now();
for(let i=0;i<=100000;i++){
    console.log(i);
}
let end= performance.now();
let duration=start-end;
console.log(`Loop Took ${duration} Milliseconds`);
console.log("...............");

//ass6
function* gen() {
    let index = 14;
    let num = 140;
    let sum = num + index;
    yield index;
    while (true) {
    yield sum;
    sum += num += 200;
    }
    }
    
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log("...............");

//ass7
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll(){
    yield * new Set (genNumbers());
    yield * new Set (genLetters());
}
let generator1 = genAll();

  console.log(generator1.next()); // {value: 1, done: false}
  console.log(generator1.next()); // {value: 2, done: false}
  console.log(generator1.next()); // {value: 3, done: false}
  console.log(generator1.next()); // {value: 4, done: false}
  console.log(generator1.next()); // {value: 5, done: false}
  console.log(generator1.next()); // {value: "A", done: false}
  console.log(generator1.next()); // {value: "B", done: false}
  console.log(generator1.next()); // {value: "C", done: false}
  console.log(generator1.next()); // {value: "D", done: false}
console.log("..............");



