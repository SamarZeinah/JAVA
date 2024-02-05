let promptNum=prompt("Print number from-to","Ex 5-20");
let counter = promptNum.split("-").sort();
let count=setInterval(function(){
    let myDiv=document.createElement("div");
myDiv.innerHTML=counter[0]++;
if(myDiv.innerHTML===counter[1]){
    clearInterval(count);
}
document.body.appendChild(myDiv);
} ,1000)
