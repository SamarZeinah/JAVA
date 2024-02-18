//ass5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|\s)(-)?(\s)?\d{2}(\/|\s)(-)?(\s)?\d{2,4}/gi; 
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
console.log('..............');

//ass6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re1 =   /((http?)s?:\/\/)?(www.)?\w+.\w+(:\w+\D\w+.\w+\D\w+\D\d{2}\D\w+\D\w+)?/ig; 
console.log(url1.match(re1));
console.log(url2.match(re1));
console.log(url3.match(re1));
console.log(url4.match(re1));
console.log(url5.match(re1));