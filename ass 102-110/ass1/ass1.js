// Ass one
// let promptNum = prompt("Print Numbers From - To", "Example 5 - 20");
// let counter = promptNum.split("-").sort();
// let count = setInterval(() => {
// let myDiv = document.createElement("div");
// myDiv.innerHTML = counter[0]++;
// if (myDiv.innerHTML === counter[1]) {
// clearInterval(count);
// }
// document.body.appendChild(myDiv);
// }, 0);

//ass three
// let downCount = document.querySelector("div");
// let Count = setInterval(() => {
// downCount.innerHTML -= 1;
// if (downCount.innerHTML === "0") {
// clearInterval(Count);
// }
// }, 1000);

// Ass Four
// let urlChange = document.querySelector("div");
// setInterval(() => {
// urlChange.innerHTML -= 1;
// if (urlChange.innerHTML === "0") {
// window.location.assign("https://elzero.org/");
// }
// }, 1000);

// Ass Five
let openURL = document.querySelector("div");
let count1 = setInterval(() => {
openURL.innerHTML -= 1;
if (openURL.innerHTML === "5") {
window.open(
"https://Elzero.org",
"_blank",
"width= 400, height= 400, left= 300, top = 100"
);
} else if (openURL.innerHTML === "0") {
clearInterval(count1);
}
}, 1000);