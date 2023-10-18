//Ass One
function sayHello(theName, theGender) {
    if(theGender==="Male"){
        console.log(`Hello Mr ${theName}`);
    }
    else if(theGender==="Female"){
        console.log(`Hello Miss ${theName}`);
    }
    else{
        console.log(`Hello ${theName}`);
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
console.log(`..........`);
 

//Ass Two
function calculate(firstNum, secondNum, operation) {
    if(operation === "add" || operation === undefined && secondNum !== undefined){
       console.log(firstNum+secondNum);
   }
   else if(operation === "subtract" )
   {
       console.log(firstNum-secondNum);
   }
   else if(operation === "multiply" )
   {
       console.log(firstNum*secondNum);
   }
   else{
       console.log(`Second Number Not Found`);
       }
 }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
console.log(`..........`);


//Ass Three
function ageInTime(theAge) {
   if(theAge>10&&theAge<100){
console.log(`Months:${theAge*12}`);
console.log(`Weeks:${theAge*12*4}`);
console.log(`Days:${theAge*12*4*7}`);
console.log(`Hours:${theAge*12*4*7*24}`);
console.log(`Minutes:${theAge*12*4*7*24*60}`);
console.log(`Seconds:${theAge*12*4*7*24*60*60}`);

   }
   else{
    console.log(`Age Out Of Range`);
   }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
  console.log(`..........`);

  //Ass Four
  function checkStatus(a, b, c) {
    if(typeof a==="string" && typeof b==="Number" || c===true){
        console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
    }
    else if(typeof a==="Number" && typeof b==="string" || c===true){
        console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
    }
    else if(a===true ||typeof b==="Number" && typeof c==="string"){
        console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
    }
    else {
        console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
    }
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  console.log(`..........`);

  //Ass Five
  function createSelectBox(startYear, endYear) {
document.write(`<select>`);
for(let i=startYear;i<=endYear;i++){
    document.write(`<option value= ${i}> ${i}</option>`);
}
document.write(`</select>`); 
     }
  createSelectBox(2000, 2021);
  console.log(`..........`);

  //Ass Six
  function multiply(...Numbers) {
    let result = 1;
    for (i = 0; i < Numbers.length; i++) {
    if (typeof Numbers[i] === "string") {
    continue;
    } 
    else {
    // result *= Numbers[i];
    result *= Math.floor(Numbers[i]);
    
    }
    }
    console.log(result);
    }
    
  multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
