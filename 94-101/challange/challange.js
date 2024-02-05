//make header
// let header=document.createElement("Header");
// header.className="Header";
// let logo=document.createElement("h2");
// let logo_Text=document.createElement("Elzero");
// logo.className="Logo";
// logo.appendChild(logo_Text);
// let ul=document.createElement("UL");
// ul.className="Ul";
// let liArray=["Home", "About", "Services", "Contact"];
// for (let i = 0; i < liArray.length; i++) {
// let li = document.createElement("li");
// liText = document.createTextNode(liArray[i]);
// li.appendChild(liText);
// ul.appendChild(li);
// }
// header.appendChild(ul);
//Style Header Elements
// document.body.style.cssText=`margin-top:0; margin-bottom:0; `;
// header.style.cssText=`display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;`;
// logo.style.cssText="color:green;";
// ul.style.cssText="list-style:none; display:fiex; align-item:center; gap:20px; font-size:17px;";
// console.log(header);
// function myfun(x){
//     if(x.matches){
//         logo.style.cssText="margin: 0 auto; color: #019688";
//     }
//     else{
//         logo.style.cssText="color: #019688";
//     }
// }
// let x= window.matchMedia("(max-width: 500px)");
// myfun(x); // Call listener function at run time
// x.addListener(myfun); // Attach listener function on state changes
// document.body.appendChild(header);
    //Creat Header Elements
let header = document.createElement("header");
header.className = "website-head";
let logo = document.createElement("h2");
let logoText = document.createTextNode("Elzero");
logo.className = "logo";
logo.appendChild(logoText);
header.appendChild(logo);
let ul = document.createElement("ul");
ul.className = "menu";
let liArray = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < liArray.length; i++) {
let li = document.createElement("li");
liText = document.createTextNode(liArray[i]);
li.appendChild(liText);
ul.appendChild(li);
}
header.appendChild(ul);
//Style Header Elements
document.body.style.cssText = `margin-top: 0; margin-bottom: 0;`;
header.style.cssText =
"display:flex; justify-content: space-between; align-items: center; flex-wrap: wrap";
logo.style.cssText = "color: #019688";
ul.style.cssText =
"list-style: none; display:flex; align-items: center; gap: 20px; font-size: 17px ";
function myFunction(x) {
if (x.matches) {
// If media query matches
logo.style.cssText = " margin: 0 auto; color: #019688";
} else {
logo.style.cssText = "color: #019688";
}
}
let x = window.matchMedia("(max-width: 500px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
document.body.appendChild(header);

//creat content Elements
let content=document.createElement("div");
content.className="content";
content.style.cssText="diplay:grid; grid-template-columns:repeat(auto-fill, minmax(350px, 1fr)); gap:15px; background-color: #ececec; padding: 15px; ";
for(let i=0;i<15;i++){
    let product=document.createElement("div");
    product.className="product";
    let product_text=document.createTextNode("product");
    product.appendChild(product_text);

    let span=document.createElement("span");
    span.className="span";
    span_number=document.createTextNode(`${i+1}`);
    span.appendChild(span_number);
    content.appendChild(span);
    content.appendChild(product);
    //Style Content Elements
    product.style.cssText ="display: flex; flex-direction: column-reverse; gap: 10px; align-items: center; padding: 15px; background-color: #fff; border-radius: 4px; box-shadow: rgb(0 0 0 / 9%) 1px 1px 10px 1px; font-size: 13px; color: rgb(153, 153, 153);";
span.style.cssText = "font-size: 25px; font-weight: bold; color: #000";
}
function sec_fun(y){
    if(y.matches) {
        // If media query matches
        content.style.cssText =
        "display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; background-color: #ececec; padding: 15px;";
        } else {
        content.style.cssText =
        "display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 15px; background-color: #ececec; padding: 15px;";
        }

}
let y = window.matchMedia("(max-width: 400px)");
sec_fun(y); // Call listener function at run time
y.addListener(sec_fun); // Attach listener function on state changes
document.body.appendChild(content);
