                          //first
// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
num = "0";
console.log(100_000); // 100000
console.log(1e5); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10 ** 5); // 100000
console.log(2e5/2); // 100000
console.log(50000+50000); // 100000
console.log(Number("100000"));
console.log(Number(1 + num.repeat(5))); // 100000
console.log(parseInt(100000)); // 100000
console.log(Number.parseInt(1 + num.repeat(5))); // 100000
console.log(parseInt(+true + num.repeat(5))); // 100000
console.log(parseInt((11 % 2) + num.repeat(5))); // 100000
console.log(parseInt(1 + num.repeat(5))); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.max(10, 100, 1000, 10000, 100000)); // 100000
console.log(Math.min(10, 100, 1000, 10000, 100000) ** 5); // 100000
console.log(+`${num.length}${num.repeat(5)}`); // 100000

                           //Second
//إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


                            //third
 // بسطر واحد فقط إستخدم MAX_SAFE_INTEGER لتخرج بالنتيجة رقم 16 بدون إستعمال أي أرقام
 console.log(Number.MAX_SAFE_INTEGER.toString().length);

                        //fourt
let myVar = "100.56789 Views";
 console.log(Number.parseInt(myVar)); // 100
 console.log((Number.parseFloat(myVar)).toFixed(2)); // 100.57 
 
                        //fifth
 let numb = 10;
console.log(+Number.isInteger(numb) + Number.isInteger(numb)); // 2   
                            //six
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.ceil(flt)-true); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10

                 //seven
console.log(Math.trunc(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4

