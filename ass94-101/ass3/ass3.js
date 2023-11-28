//Ass three
// let myP = document.querySelector("p");
// myP.remove();
// let ourElement = document.querySelector(".our-element");
// let preDiv = document.createElement("div");
// preDiv.className = "start";
// preDiv.setAttribute("title", "start Element");
// preDiv.setAttribute("data-value", "start");
// preDiv.innerHTML = "Start";
// ourElement.before(preDiv);
// afterDev = document.createElement("div");
// afterDev.className = "end";
// afterDev.setAttribute("end", "start Element");
// afterDev.setAttribute("data-value", "end");
// afterDev.innerHTML = "End";
// ourElement.after(afterDev);

//Ass Four
// let myElement = document.querySelector("div");
// console.log(myElement.lastChild.textContent.trim());


//Ass Five
let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
document.body.addEventListener("click", (e) => {
if (e.target === div) {
console.log("This Is div");
} else if (e.target === span) {
console.log("This Is Span");
} else if (e.target === p) {
console.log("This Is P");
} else if (e.target === article) {
console.log("This Is article");
} else if (e.target === section) {
console.log("This Is section");
}
});
document.body.onclick = function (e) {
if (e.target.nodeName != "BODY") {
console.log(`This Is ${e.target.nodeName.toLowerCase()}`);
}
};
