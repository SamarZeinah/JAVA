let myReq = new XMLHttpRequest();
myReq.open("GET", "ass.json");
myReq.send();
console.log(myReq);
myReq.onreadystatechange = function () {
if (this.readyState === 4 && this.status === 200) {
let mainData = JSON.parse(this.responseText);
let container = document.createElement("div");
container.id = "data";
container.className = "container";
container.style.cssText = `display: flex; gap: 10px; flex-wrap: wrap;`;
for (let i = 0; i < mainData.length; i++) {
let div = document.createElement("div");
div.className = "article";
div.style.cssText = `background: #004766; padding: 5px 15px; margin: 10px auto 
0px; color: #fff; font: bold 17px arial; width: 400px; border-radius: 10px`;
let name = document.createElement("p");
let nameText = document.createTextNode(`Name: ${mainData[i].name}`);
name.appendChild(nameText);
let title = document.createElement("p");
let titleText = document.createTextNode(`Title: ${mainData[i].title}`);
title.appendChild(titleText);
let section = document.createElement("p");
let sectionText = document.createTextNode(
`Section: ${mainData[i].section}`
);
section.appendChild(sectionText);
let content = document.createElement("p");
let contentText = document.createTextNode(
`Content: ${mainData[i].content}`
);
content.appendChild(contentText);
div.appendChild(name);
div.appendChild(title);
div.appendChild(section);
div.appendChild(content);
container.appendChild(div);
document.body.appendChild(container);
}
}
};