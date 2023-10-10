                          //first
// Test Case 1
let num1 = 9; // "009"
if(num1<10){
    console.log(`00${num1}`)

}

// Test Case 2
let num2 = 20; // "020"
if(num2>10&&num2<100){
    console.log(`0${num2}`)

}
// Test Case 3
let num3 = 110; // "110"
if(num3>=100){
    console.log(num3);
}
                       //second
let number1 = 9;
let str = "9";
let str2 = "20";
if (number1==str){
    console.log(`${number1} Is The Same Value As ${str}`);
}
else console.log("False");

 if(number1==str&&typeof(number1)!=typeof(str)){
console.log(`${number1} Is The Same Value As ${str} But Not The Same Type`);
}
else console.log("False");

if(number1!=str2&&typeof(number1)!=typeof(str)){
    console.log(`${number1} Is not The Same Value As ${str2} and Not The Same Type`);
    }
    else console.log("False");

if(str!=str2&&typeof(str)==typeof(str2)){
    console.log(`${str} Is not The Same Value As ${str2} But The Same Type`);
        }
  else console.log("False");

// Output
// "{number1} Is The Same Value As {str}"
// "{number1} Is The Same Value As {str} But Not The Same Type"
// "{number1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"