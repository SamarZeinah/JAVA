/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//first
/*
  ##[++a] [+]                               
  [++a]
  - Value:11
  - Explain:increment(pre)
  [+]    (addition operator)

  ##[+] [+b++]
  [+]    (addition operator)
  [+] (Unary plus)
  [b++]
  -Value:20        new b=21
  Explain: increment(post)

  ##[+] [+c++]
  [+]    (addition operator)
  [+] (Unary plus)
  [c++]
  -Value:80        new c=81
  Explain: increment(post)

  ##[-] [+a++]
  [+]    (sub operator)
  [+] (Unary plus)
  [b++]
  -Value:11        new a=12
  Explain: increment(post)
  
           ###End value=11+20+80-11=100
*/


//Second
// a = 12    b = 21    c = 81
/*
##[++a] [+]                               
  [++a]
  - Value:13
  - Explain:increment(pre)
  [+]    (addition operator)
  
  ##[-b]
  [-] (Unary nagation)
  value:-21

  ##[+][+c++]
  [+] (addition operator)
  [+](Unary plus)
  [c++]
  value:81    new value:82
  Explain:increment(post)
  
  ##[-][-a++]
  [-] (sub operator)
  [-](unary negation)
  [-a++]
  value:-13     new value:-14
  
  ##[+][+a]
  [+] (addition operator)
  [+a]
  value:14
          ###End value=13-21+81+13+14=100
  */
  console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
 //third
 // a=14  b=21   c=82
 //End value=81+21+(13*21)-(22*13)+12-1=100
 //c=81 a=13 b=22 a=12