// ass1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regex = /\d{4}:\w+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4} /gi;
let regex =  /\d{4}:\w+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi
console.log(ip.match(regex));
console.log('..............');

//ass2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regex2=/os(\d{2,3})?o/ig;
console.log(specialNames.match(regex2));
// Output
// ['Os10O', 'OsO', 'Os100O']
console.log('...........');

// ass3
let phone = "+(995)-123 (4567)";
let regex3=/\D\(\d{3}\)\D\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(regex3));
console.log('........');

//ass4
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//   https?  ==> Sممكن تكون موجوده وممكن لا
//   \/\/    ==>نضع باك اسلاش لطباعه القوس
//    