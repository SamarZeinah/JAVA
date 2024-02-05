let myInput = document.querySelector("[name='dollar']");
let myResult = document.querySelector(".result");
let form = document.getElementsByTagName("form");
myInput.oninput = function () {
myResult.textContent = `{${myInput.value} USD Dollar = {${(
myInput.value * 19.15
).toFixed(2)}} Egyptian Pound}`;
};
form[0].style.cssText ="display: flex; flex-direction: column; align-items: center; border: 1px solid black; padding: 15px; width: fit-content;";
myInput.style.cssText =
"border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;";
myResult.style.cssText =
"margin-top: 10px; color: rgb(57, 4, 110); font-size: 18px;";