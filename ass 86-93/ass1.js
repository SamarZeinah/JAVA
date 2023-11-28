// Ass One
// let myDiv1 = document.getElementsByTagName("div");
// console.log(myDiv1[0]);
// let myDiv2 = document.getElementById("elzero");
// console.log(myDiv2);
// let myDiv3 = document.getElementsByClassName("element");
// console.log(myDiv3[0]);
// let myDiv4 = document.querySelector("div");
// console.log(myDiv4);
// let myDiv5 = document.querySelector("#elzero");
// console.log(myDiv5);
// let myDiv6 = document.querySelector(".element");
// console.log(myDiv6);
// let myDiv7 = document.querySelector(" [name='js']");
// console.log(myDiv7);
// let myDiv8 = document.querySelectorAll("div");
// console.log(myDiv8[0]);
// let myDiv9 = document.querySelectorAll("#elzero");
// console.log(myDiv9[0]);
// let myDiv10 = document.querySelectorAll(".element");
// console.log(myDiv10[0]);
// let myDiv11 = document.querySelectorAll(" [name='js']");
// console.log(myDiv11[0]);
// let myDiv12 = document.body.children[0];
// console.log(myDiv12);
// let myDiv13 = document.body.childNodes[1];
// console.log(myDiv13);
// let myDiv14 = document.body.firstElementChild;
// console.log(myDiv14);
// let myDiv15 = document.body.firstChild;
// console.log(myDiv15);
// console.log(`...........`);


// Ass Two
// let myImg = document.querySelectorAll("div img");
// for (let i = 0; i < myImg.length; i++) {
// myImg[i].src = "https://elzero.org/wpcontent/themes/elzero/imgs/logo.png";
// myImg[i].setAttribute("alt", "Elzero Logo");
// myImg[i].style.backgroundColor = "black";
// }
// console.log(`...........`);


// Ass Three
// let myInput = document.querySelector("[name='dollar']");
// let myResult = document.querySelector(".result");
// let form = document.getElementsByTagName("form");
// myInput.oninput = function () {
// myResult.textContent = `{${myInput.value} USD Dollar = {${(
// myInput.value * 19.15
// ).toFixed(2)}} Egyptian Pound}`;
// };
// form[0].style.cssText =
// "display: flex; flex-direction: column; align-items: center; border: 1px solid 
// black; padding: 15px; width: fit-content;";
// myInput.style.cssText =
// "border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;";
// myResult.style.cssText =
// "margin-top: 10px; color: rgb(57, 4, 110); font-size: 18px;";
// console.log(`...........`);

// Ass Four
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// one.title = "one";
// two.title = "two";
// let textOne = one.textContent;
// let textTwo = two.textContent;
// one.textContent = textTwo;
// two.textContent = `${textOne} ${++two.childNodes.length}`;
// console.log(`...........`);

// Ass Five
// let theImg = document.querySelectorAll(".theImg");
// let finalResult = () => {
// for (let i = 0; i < theImg.length; i++) {
// if (theImg[i].hasAttribute("alt")) {
// theImg[i].setAttribute("alt", "Old");
// } else {
// theImg[i].setAttribute("alt", "Elzero New");
// }
// }
// };
// finalResult();
// console.log(`........`);

// Ass Six
let numberInput = document.querySelector("[type = 'number']");
let textInput = document.querySelector("[type = 'text']");
let select = document.querySelector("select");
let creatBtn = document.querySelector("[value= 'Create']");
let resultsBox = document.querySelector(".results");
creatBtn.onclick = (event) => {
event.preventDefault();
resultsBox.innerHTML = "";
for (i = 1; i <= numberInput.value; i++) {
let element = document.createElement(select.value);
element.className = "box";
element.setAttribute("title", "Element");
element.setAttribute("id", `id-${i + 1}`);
element.appendChild(document.createTextNode(textInput.value));
resultsBox.appendChild(element);
}
};
console.log(`.....`);


