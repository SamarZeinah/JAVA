let element1=document.querySelector(".one");
let element2=document.querySelector(".two");
// console.log(element1);
// console.log(element2);
element1.title="One";
element2.title="Two";
// console.log(element1.title);
// console.log(element2.title);
let text1=element1.textContent;  //Two
let text2=element2.textContent;   //one

element1.textContent=text2;  //one
element2.textContent=`${text1} ${++element2.childNodes.length}`;   //two2


