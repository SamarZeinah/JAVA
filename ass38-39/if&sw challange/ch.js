                        //first
/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
 }
//sol
let jOb = "Designer";
let Salary = 0;
switch(jOb){
    case "Manager":
        Salary = 8000;
        console.log(`my salary is${Salary}`);
    break;
    case "Support":
    case"IT":
        Salary = 6000;
        console.log(`my salary is${Salary}`);
    break;
    case "Designer":
    case "Developer":
        Salary = 7000;
        console.log(`my salary is${Salary}`);
    break;
    default:
        Salary = 4000;
        console.log(`my salary is${Salary}`);
    
}
console.log("..................");
                       //second
/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

//sol
let Holidays = 0;
let Money = 0;
if(Holidays===0){
    console.log(Money = 5000);
}
else if(Holidays===1||Holidays===2){
    console.log(Money = 3000);
}
else if(Holidays===3){
    console.log(Money = 2000);
}
else if(Holidays===4){
    console.log(Money = 1000);
}
else if(Holidays===5){
    console.log(Money = 0);
}
else{
    console.log(Money = 0);
}